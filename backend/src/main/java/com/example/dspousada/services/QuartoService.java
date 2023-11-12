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

import com.example.dspousada.dto.QuartoDTO;
import com.example.dspousada.entities.Quarto;
import com.example.dspousada.repositories.QuartoRepository;
import com.example.dspousada.services.exception.DatabaseException;
import com.example.dspousada.services.exception.ResourceNotFoundException;

@Service
public class QuartoService {

	@Autowired
	private QuartoRepository quartoRepository;

	@Transactional(readOnly = true)
	public Page<QuartoDTO> findAllPaged(Pageable pageable) {
		Page<Quarto> list = quartoRepository.findAllWithout1(pageable);
		return list.map(x -> new QuartoDTO(x));
	}

	@Transactional(readOnly = true)
	public QuartoDTO findById(Long id) {
		Optional<Quarto> obj = quartoRepository.findById(id);
		Quarto entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new QuartoDTO(entity);
	}

	@Transactional
	public QuartoDTO insert(QuartoDTO dto) {
	    Quarto entity = new Quarto();
	    entity.setStatus(dto.getStatus());
	    entity.setNome(dto.getNome());
	    entity.setNumero(dto.getNumero());
	    entity = quartoRepository.save(entity);
	    return new QuartoDTO(entity);
	}

	@Transactional
	public QuartoDTO update(Long id, QuartoDTO dto) {
	    try {
	        Quarto entity = quartoRepository.getReferenceById(id);
	        entity.setStatus(dto.getStatus());
		    entity.setNome(dto.getNome());
		    entity.setNumero(dto.getNumero());
	        entity = quartoRepository.save(entity);
	        return new QuartoDTO(entity);
	    } catch (EntityNotFoundException e) {
	        throw new ResourceNotFoundException("Id not found " + id);
	    }
	}

	public void delete(Long id) {
		try {
			quartoRepository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Integrity violation");
		}
	}
}
