package com.example.dspousada.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.dspousada.entities.Caravana;

@Repository
public interface CaravanaRepository extends JpaRepository<Caravana, Long>{
	
	@Query(nativeQuery = true, value = "SELECT * FROM tb_caravana i WHERE (LOWER(i.nome) LIKE LOWER(CONCAT('%',:name,'%')))")
	Page<Caravana> findCaravanaPaged(String name, Pageable pageable);
	
	@Query(nativeQuery = true, value = "SELECT guia_id FROM tb_caravana WHERE id = :id")
	Long findIdGuia(Long id);

}
