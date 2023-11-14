package com.example.dspousada.resources;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.dspousada.dto.GuestDTO;
import com.example.dspousada.services.GuestService;


@RestController
@RequestMapping(value = "/guest")
public class GuestResource {
	
	@Autowired
	private GuestService service;
	
	@GetMapping
	public ResponseEntity<Page<GuestDTO>> findAll(@RequestParam(value = "name", defaultValue = "") String name,
			@RequestParam(value = "documento", defaultValue = "") String documento,
			@RequestParam(value = "dataEntrada1", defaultValue = "") String dataEntrada1,
			@RequestParam(value = "dataEntrada2", defaultValue = "") String dataEntrada2,
			@RequestParam(value = "dataSaida1", defaultValue = "") String dataSaida1,
			@RequestParam(value = "dataSaida2", defaultValue = "") String dataSaida2,
			@RequestParam(value = "ativo", defaultValue = "") String ativo,
			@RequestParam(value = "caravana", defaultValue = "1") Long caravana,Pageable pageable) {
		Page<GuestDTO> list = service.findAllPaged(name, documento, dataEntrada1, dataEntrada2, dataSaida1, dataSaida2, ativo, caravana, pageable);		
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<GuestDTO> findById(@PathVariable Long id) {
		GuestDTO dto = service.findById(id);
		return ResponseEntity.ok().body(dto);
	}
	
	@PostMapping(value = "/checkout")
	public ResponseEntity<Void> checkout(@RequestBody List<Integer> lista) {
		service.checkout(lista);
		return ResponseEntity.noContent().build();
	}
	
	@PostMapping(value = "/checkinLeito/{idGuest}/{idLeito}")
	public ResponseEntity<Void> checkouinLeito(@PathVariable Long idGuest, @PathVariable Long idLeito) {
		service.checkinLeito(idGuest, idLeito);
		return ResponseEntity.noContent().build();
	}
	
	@PostMapping
	public ResponseEntity<GuestDTO> insert(@RequestBody @Valid GuestDTO dto) {
		GuestDTO newDto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(newDto.getId()).toUri();
		return ResponseEntity.created(uri).body(newDto);
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<GuestDTO> update(@PathVariable Long id, @RequestBody @Valid GuestDTO dto) {
		GuestDTO newDto = service.udpate(id, dto);
		return ResponseEntity.ok().body(newDto);
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
}
