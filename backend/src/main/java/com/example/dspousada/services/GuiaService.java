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

import com.example.dspousada.dto.GuiaDTO;
import com.example.dspousada.entities.Caravana;
import com.example.dspousada.entities.Guest;
import com.example.dspousada.entities.Guia;
import com.example.dspousada.repositories.CaravanaRepository;
import com.example.dspousada.repositories.GuestRepository;
import com.example.dspousada.repositories.GuiaRepository;
import com.example.dspousada.services.exception.DatabaseException;
import com.example.dspousada.services.exception.ResourceNotFoundException;

@Service
public class GuiaService {

	@Autowired
	private GuiaRepository repository;
	
	@Autowired
	private CaravanaRepository caravanaRepository;
	
	@Autowired
	private GuestRepository guestRepository;

	@Transactional(readOnly = true)
	public Page<GuiaDTO> findAllPaged(String name, String documento, String dataEntrada1, String dataEntrada2,
			String dataSaida1, String dataSaida2, String ativo, Pageable pageable) {
		Page<Guia> list;
		if (!dataEntrada1.isEmpty() && !dataEntrada2.isEmpty()) {
			if (dataEntrada1.equals(dataEntrada2)) {
				list = repository.findGuiaDataEntradaEqualPaged(dataEntrada1, pageable);
			} else {
				list = repository.findGuiaDataEntradaPaged(dataEntrada1, dataEntrada2, pageable);
			}
		} else if (!dataSaida1.isEmpty() && !dataSaida2.isEmpty()) {
			if (dataSaida1.equals(dataSaida2)) {
				list = repository.findGuiaDataSaidaEqualPaged(dataSaida1, pageable);
			} else {
				list = repository.findGuiaDataSaidaPaged(dataSaida1, dataSaida2, pageable);
			}
		} else if (!ativo.isEmpty()) {
			list = repository.findGuiaAtivos(pageable);
		} else {
			list = repository.findGuiaPaged(name, documento, pageable);
		}
		return list.map(x -> new GuiaDTO(x));
	}

	@Transactional(readOnly = true)
	public GuiaDTO findById(Long id) {
		Optional<Guia> obj = repository.findById(id);
		Guia entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new GuiaDTO(entity);
	}

	@Transactional
	public void checkout(List<Integer> lista) {
		Date dataAtual = new Date();
		DateFormat dateFormat = new SimpleDateFormat("ddMMyyyy");
		String dataFormatada = dateFormat.format(dataAtual);
		for (int i = 0; i < lista.size(); i++) {
			repository.checkoutGuia(lista.get(i), dataFormatada);
		}
	}

	@Transactional
    public GuiaDTO insert(GuiaDTO dto) {
        Caravana caravana = caravanaRepository.getReferenceById(dto.getCaravana());
        Guia entity = new Guia();
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
        entity.setCaravana(caravana);
        entity.setNomeCaravana(caravana.getNome());
        entity = repository.save(entity);
        Guest guest = new Guest();
        guest.setNome(dto.getNome());
        guest.setDocumento(dto.getDocumento());
        guest.setDataNascimento(dto.getDataNascimento());
        guest.setTelefone(dto.getTelefone());
        guest.setGenero(dto.getGenero());
        guest.setEmail(dto.getEmail());
        guest.setCidade(dto.getCidade());
        guest.setEstado(dto.getEstado());
        guest.setNacionalidade(dto.getNacionalidade());
        guest.setDataEntrada(dto.getDataEntrada());
        guest.setDataSaida(dto.getDataSaida());
        guest.setEvento(dto.getEvento());
        guest.setCaravana(caravana);
        guest.setNomeCaravana(caravana.getNome());
        guest.setGuia(entity);
        guestRepository.save(guest);
        return new GuiaDTO(entity);
    }

	@Transactional
	public GuiaDTO udpate(Long id, GuiaDTO dto) {
		try {
			Caravana caravana = caravanaRepository.getReferenceById(dto.getCaravana());
			Guia entity = repository.getReferenceById(id);
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
			entity.setCaravana(caravana);
			entity.setNomeCaravana(caravana.getNome());
			entity = repository.save(entity);
			return new GuiaDTO(entity);
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
