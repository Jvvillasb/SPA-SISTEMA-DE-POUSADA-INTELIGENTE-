package com.example.dspousada.services;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.dspousada.dto.GuestDTO;
import com.example.dspousada.entities.Caravana;
import com.example.dspousada.entities.Guest;
import com.example.dspousada.entities.Guia;
import com.example.dspousada.entities.Leito;
import com.example.dspousada.repositories.CaravanaRepository;
import com.example.dspousada.repositories.GuestRepository;
import com.example.dspousada.repositories.GuiaRepository;
import com.example.dspousada.repositories.LeitoRepository;
import com.example.dspousada.services.exception.DatabaseException;
import com.example.dspousada.services.exception.ResourceNotFoundException;

@Service
public class GuestService {

	@Autowired
	private GuestRepository repository;
	
	@Autowired
	private GuiaRepository guiaRepository;
	
	@Autowired
	private CaravanaRepository caravanaRepository;
	
	@Autowired
	private LeitoRepository leitoRepository;

	@Transactional(readOnly = true)
	public Page<GuestDTO> findAllPaged(String name, String documento, String dataEntrada1, String dataEntrada2,
			String dataSaida1, String dataSaida2, String ativo, Long caravana, Pageable pageable) {
		Page<Guest> list;
		if (!dataEntrada1.isEmpty() && !dataEntrada2.isEmpty()) {
			if (dataEntrada1.equals(dataEntrada2)) {
				list = repository.findGuestDataEntradaEqualPaged(dataEntrada1, pageable);
			} else {
				list = repository.findGuestDataEntradaPaged(dataEntrada1, dataEntrada2, pageable);
			}
		} else if (!dataSaida1.isEmpty() && !dataSaida2.isEmpty()) {
			if (dataSaida1.equals(dataSaida2)) {
				list = repository.findGuestDataSaidaEqualPaged(dataSaida1, pageable);
			} else {
				list = repository.findGuestDataSaidaPaged(dataSaida1, dataSaida2, pageable);
			}
		} else if (!ativo.isEmpty()) {
			list = repository.findGuestAtivos(name, documento, caravana, pageable);
		} else {
			list = repository.findGuestPaged(name, documento, caravana, pageable);
		}
		return list.map(x -> new GuestDTO(x));
	}

	@Transactional(readOnly = true)
	public GuestDTO findById(Long id) {
		Optional<Guest> obj = repository.findById(id);
		Guest entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new GuestDTO(entity);
	}

	@Transactional
	public void checkout(List<Integer> lista) {
		Date dataAtual = new Date();
		DateFormat dateFormat = new SimpleDateFormat("ddMMyyyy");
		String dataFormatada = dateFormat.format(dataAtual);
		for (int i = 0; i < lista.size(); i++) {
			repository.checkoutGuest(lista.get(i), dataFormatada);
			repository.checkinLeitoInteger(1, lista.get(i));
			leitoRepository.updateStatusDisponivel(lista.get(i));
			leitoRepository.updateGuestIdToNull(lista.get(i));
		}
	}
	
	@Transactional
	public void checkinLeito(Long idGuest, Long idLeito) {
		repository.checkinLeito(idLeito, idGuest);
		leitoRepository.checkinLeito(idGuest, idLeito);
		leitoRepository.updateStatus(idLeito);
	}

	@Transactional
	public GuestDTO insert(GuestDTO dto) {
		Caravana caravana = caravanaRepository.getReferenceById(dto.getCaravana());
		Guia guia = guiaRepository.getReferenceById(dto.getGuia());
	    Leito leito = leitoRepository.getReferenceById(dto.getLeito());
		Guest entity = new Guest();
		entity.setNome(dto.getNome());
		entity.setDocumento(dto.getDocumento());
		entity.setDataNascimento(dto.getDataNascimento());
		entity.setTelefone(dto.getTelefone());
		entity.setGenero(dto.getGenero());
		entity.setEmail(dto.getEmail());
		entity.setCidade(dto.getCidade());
		entity.setEstado(dto.getEstado());
		entity.setNacionalidade(dto.getNacionalidade());
		entity.setDataEntrada(dto.getDataEntrada());
		entity.setDataSaida(dto.getDataSaida());
		entity.setEvento(dto.getEvento());
		entity.setGuia(guia);
		entity.setNomeGuia(guia.getNome());
		entity.setCaravana(caravana);
		entity.setNomeCaravana(caravana.getNome());
	    entity.setLeito(leito);
		entity = repository.save(entity);
		return new GuestDTO(entity);
	}

	@Transactional
	public GuestDTO udpate(Long id, GuestDTO dto) {
		try {
			Caravana caravana = caravanaRepository.getReferenceById(dto.getCaravana());
			Guia guia = guiaRepository.getReferenceById(dto.getGuia());
	        Leito leito = leitoRepository.getReferenceById(dto.getLeito());
			Guest entity = repository.getReferenceById(id);
			entity.setNome(dto.getNome());
			entity.setDocumento(dto.getDocumento());
			entity.setDataNascimento(dto.getDataNascimento());
			entity.setTelefone(dto.getTelefone());
			entity.setGenero(dto.getGenero());
			entity.setEmail(dto.getEmail());
			entity.setCidade(dto.getCidade());
			entity.setEstado(dto.getEstado());
			entity.setNacionalidade(dto.getNacionalidade());
			entity.setDataEntrada(dto.getDataEntrada());
			entity.setDataSaida(dto.getDataSaida());
			entity.setEvento(dto.getEvento());
			entity.setGuia(guia);
			entity.setNomeGuia(guia.getNome());
			entity.setCaravana(caravana);
			entity.setNomeCaravana(caravana.getNome());
	        entity.setLeito(leito);
			entity = repository.save(entity);
			return new GuestDTO(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}
	}

	public void delete(Long id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Integrity violation");
		}
	}

}
