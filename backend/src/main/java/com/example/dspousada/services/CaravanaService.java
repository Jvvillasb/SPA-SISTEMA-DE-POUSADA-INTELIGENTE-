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

import com.example.dspousada.dto.CaravanaDTO;
import com.example.dspousada.entities.Caravana;
import com.example.dspousada.entities.Guia;
import com.example.dspousada.repositories.CaravanaRepository;
import com.example.dspousada.repositories.GuiaRepository;
import com.example.dspousada.services.exception.DatabaseException;
import com.example.dspousada.services.exception.ResourceNotFoundException;


@Service
public class CaravanaService {
	
	@Autowired
	private GuiaRepository guiaRepository;

	@Autowired
	private CaravanaRepository repository;
	
	@Transactional(readOnly = true)
	public Page<CaravanaDTO> findAllPaged(String name, Pageable pageable) {
		Page<Caravana> list = repository.findCaravanaPaged(name, pageable);
		return list.map(x -> new CaravanaDTO(x));
	}

	@Transactional(readOnly = true)
	public CaravanaDTO findById(Long id) {
		Optional<Caravana> obj = repository.findById(id);
		Caravana entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new CaravanaDTO(entity);
	}

	@Transactional
	public CaravanaDTO insert(CaravanaDTO dto) {
		Guia guia = guiaRepository.getReferenceById(dto.getGuia());
		Caravana entity = new Caravana();
		entity.setNome(dto.getNome());
		entity.setCidade(dto.getCidade());
		entity.setGuia(guia);
		entity = repository.save(entity);
		return new CaravanaDTO(entity);
	}

	@Transactional
	public CaravanaDTO update(Long id, CaravanaDTO dto) {
		try {
			Caravana entity = repository.getReferenceById(id);
			Guia guia = guiaRepository.getReferenceById(dto.getGuia());
			entity.setNome(dto.getNome());
			entity.setCidade(dto.getCidade());
			entity.setGuia(guia);
			entity = repository.save(entity);
			return new CaravanaDTO(entity);
		}
		catch (EntityNotFoundException e) {
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
