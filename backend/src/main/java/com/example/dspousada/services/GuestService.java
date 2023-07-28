package com.example.dspousada.services;

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
import com.example.dspousada.entities.Guest;
import com.example.dspousada.repositories.GuestRepository;
import com.example.dspousada.services.exception.DatabaseException;
import com.example.dspousada.services.exception.ResourceNotFoundException;

@Service
public class GuestService {
	
	@Autowired
	private GuestRepository repository;
	
	@Transactional(readOnly = true)
	public Page<GuestDTO> findAllPaged(Pageable pageable){
		Page<Guest> list = repository.findAll(pageable);
		return list.map(x -> new GuestDTO(x));
	}
	
	@Transactional(readOnly = true)
	public GuestDTO findById(Long id) {
		Optional<Guest> obj = repository.findById(id);
		Guest entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new GuestDTO(entity);
	}
	
	@Transactional(readOnly = true)
	public GuestDTO findByName(String nome) {
		Optional<Guest> obj = Optional.ofNullable(repository.findByNome(nome));
		Guest entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new GuestDTO(entity);
	}
	
	@Transactional
	public GuestDTO insert(GuestDTO dto) {
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
		entity.setCaravana(dto.getCaravana());
		entity.setDataEntrada(dto.getDataEntrada());
		entity.setDataSaida(dto.getDataSaida());
		entity = repository.save(entity);
		return new GuestDTO(entity);
	}
	
	@Transactional
	public GuestDTO udpate(Long id, GuestDTO dto) {
		try {
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
			entity.setCaravana(dto.getCaravana());
			entity.setDataEntrada(dto.getDataEntrada());
			entity.setDataSaida(dto.getDataSaida());
			entity = repository.save(entity);
			return new GuestDTO(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}
	}
	
	public void delete(Long id) {
		try {
			repository.deleteById(id);
		}
		catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}
		catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Integrity violation");
		}
	}
	
}
