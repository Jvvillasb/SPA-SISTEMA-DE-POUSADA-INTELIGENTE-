package com.example.dspousada.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.dspousada.entities.Guest;

@Repository
public interface GuestRepository extends JpaRepository<Guest, Long>{

	@Query(nativeQuery = true, value = "SELECT * FROM tb_guest i WHERE (LOWER(i.nome) LIKE LOWER(CONCAT('%',:name,'%'))) AND (LOWER(i.documento) LIKE LOWER(CONCAT('%',:documento,'%'))) AND i.caravana_id = :caravana")
	Page<Guest> findGuestPaged(String name, String documento, Long caravana, Pageable pageable);
	
	@Query(nativeQuery = true, value = "SELECT * FROM tb_guest WHERE DATA_ENTRADA BETWEEN :dataEntrada1 AND :dataEntrada2")
	Page<Guest> findGuestDataEntradaPaged(String dataEntrada1, String dataEntrada2, Pageable pageable);
	
	@Query(nativeQuery = true, value = "SELECT * FROM tb_guest WHERE DATA_ENTRADA = :data ")
	Page<Guest> findGuestDataEntradaEqualPaged(String data, Pageable pageable);
	
	@Query(nativeQuery = true, value = "SELECT * FROM tb_guest WHERE DATA_SAIDA BETWEEN :dataSaida1 AND :dataSaida2")
	Page<Guest> findGuestDataSaidaPaged(String dataSaida1, String dataSaida2, Pageable pageable);
	
	@Query(nativeQuery = true, value = "SELECT * FROM tb_guest WHERE DATA_SAIDA = :dataEntrada2")
	Page<Guest> findGuestDataSaidaEqualPaged(String dataEntrada2, Pageable pageable);
	
	@Query(nativeQuery = true, value = "SELECT * FROM tb_guest WHERE DATA_SAIDA IS NULL")
	Page<Guest> findGuestAtivos(Pageable pageable);
	
	@Modifying
	@Query(nativeQuery = true, value = "UPDATE tb_guest SET data_saida = :data WHERE id = :id") 
	public void checkoutGuest(Integer id, String data);
	
}
