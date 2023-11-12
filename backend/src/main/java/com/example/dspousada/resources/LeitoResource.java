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

import com.example.dspousada.dto.LeitoDTO;
import com.example.dspousada.services.LeitoService;

@RestController
@RequestMapping(value = "/leitos")
public class LeitoResource {

    @Autowired
    private LeitoService leitoService;

    @GetMapping
    public ResponseEntity<Page<LeitoDTO>> findAll(Pageable pageable) {
        Page<LeitoDTO> list = leitoService.findAllPaged(pageable);
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<LeitoDTO> findById(@PathVariable Long id) {
        LeitoDTO dto = leitoService.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @PostMapping
    public ResponseEntity<LeitoDTO> insert(@RequestBody LeitoDTO dto) {
        dto = leitoService.insert(dto);
        return ResponseEntity.ok().body(dto);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<LeitoDTO> update(@PathVariable Long id, @RequestBody LeitoDTO dto) {
        dto = leitoService.update(id, dto);
        return ResponseEntity.ok().body(dto);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        leitoService.delete(id);
        return ResponseEntity.noContent().build();
    }
}

