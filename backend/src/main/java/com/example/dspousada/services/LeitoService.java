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

import com.example.dspousada.dto.LeitoDTO;
import com.example.dspousada.entities.Leito;
import com.example.dspousada.entities.Quarto;
import com.example.dspousada.repositories.LeitoRepository;
import com.example.dspousada.repositories.QuartoRepository;
import com.example.dspousada.services.exception.DatabaseException;
import com.example.dspousada.services.exception.ResourceNotFoundException;

@Service
public class LeitoService {

	@Autowired
	private LeitoRepository leitoRepository;

	@Autowired
	private QuartoRepository quartoRepository;

	@Transactional(readOnly = true)
	public Page<LeitoDTO> findAllPaged(Pageable pageable) {
		Page<Leito> list = leitoRepository.findAllWithout1(pageable);
		return list.map(x -> new LeitoDTO(x));
	}

	@Transactional(readOnly = true)
	public LeitoDTO findById(Long id) {
		Optional<Leito> obj = leitoRepository.findById(id);
		Leito entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new LeitoDTO(entity);
	}

	@Transactional
	public LeitoDTO insert(LeitoDTO dto) {
		Quarto quarto = quartoRepository.getReferenceById(dto.getQuarto());
		Leito entity = new Leito();
		entity.setNumero(dto.getNumero());
		entity.setQuarto(quarto);
		entity.setStatus(dto.getStatus());
		entity = leitoRepository.save(entity);
		return new LeitoDTO(entity);
	}

	@Transactional
	public LeitoDTO update(Long id, LeitoDTO dto) {
		try {
			Quarto quarto = quartoRepository.getReferenceById(dto.getQuarto());
			Leito entity = leitoRepository.getReferenceById(id);
			entity.setNumero(dto.getNumero());
			entity.setQuarto(quarto);
			entity.setStatus(dto.getStatus());
			entity = leitoRepository.save(entity);
			return new LeitoDTO(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}
	}

	public void delete(Long id) {
		try {
			leitoRepository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Integrity violation");
		}
	}
}
