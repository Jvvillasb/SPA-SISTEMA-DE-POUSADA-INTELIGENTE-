package com.example.dspousada.resources;

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
import org.springframework.web.bind.annotation.RestController;

import com.example.dspousada.dto.QuartoDTO;
import com.example.dspousada.services.QuartoService;

@RestController
@RequestMapping(value = "/quartos")
public class QuartoResource {

    @Autowired
    private QuartoService quartoService;

    @GetMapping
    public ResponseEntity<Page<QuartoDTO>> findAll(Pageable pageable) {
        Page<QuartoDTO> list = quartoService.findAllPaged(pageable);
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<QuartoDTO> findById(@PathVariable Long id) {
        QuartoDTO dto = quartoService.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @PostMapping
    public ResponseEntity<QuartoDTO> insert(@RequestBody QuartoDTO dto) {
        dto = quartoService.insert(dto);
        return ResponseEntity.ok().body(dto);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<QuartoDTO> update(@PathVariable Long id, @RequestBody QuartoDTO dto) {
        dto = quartoService.update(id, dto);
        return ResponseEntity.ok().body(dto);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        quartoService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
