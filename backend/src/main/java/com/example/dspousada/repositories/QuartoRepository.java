package com.example.dspousada.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.dspousada.entities.Quarto;

@Repository
public interface QuartoRepository extends JpaRepository<Quarto, Long>{
	
	@Query(nativeQuery = true, value = "SELECT * FROM tb_quarto WHERE id != 1")
	Page<Quarto> findAllWithout1(Pageable pageable);

}
