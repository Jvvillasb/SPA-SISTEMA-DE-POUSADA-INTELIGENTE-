package com.example.dspousada.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.dspousada.entities.Guia;

@Repository
public interface GuiaRepository extends JpaRepository<Guia, Long>{

	@Query(nativeQuery = true, value = "SELECT * FROM tb_guia i WHERE (LOWER(i.nome) LIKE LOWER(CONCAT('%',:name,'%'))) AND (LOWER(i.documento) LIKE LOWER(CONCAT('%',:documento,'%')))")
	Page<Guia> findGuiaPaged(String name, String documento, Pageable pageable);
	
	@Query(nativeQuery = true, value = "SELECT * FROM tb_guia WHERE DATA_ENTRADA BETWEEN :dataEntrada1 AND :dataEntrada2")
	Page<Guia> findGuiaDataEntradaPaged(String dataEntrada1, String dataEntrada2, Pageable pageable);
	
	@Query(nativeQuery = true, value = "SELECT * FROM tb_guia WHERE DATA_ENTRADA = :data ")
	Page<Guia> findGuiaDataEntradaEqualPaged(String data, Pageable pageable);
	
	@Query(nativeQuery = true, value = "SELECT * FROM tb_guia WHERE DATA_SAIDA BETWEEN :dataSaida1 AND :dataSaida2")
	Page<Guia> findGuiaDataSaidaPaged(String dataSaida1, String dataSaida2, Pageable pageable);
	
	@Query(nativeQuery = true, value = "SELECT * FROM tb_guia WHERE DATA_SAIDA = :dataEntrada2")
	Page<Guia> findGuiaDataSaidaEqualPaged(String dataEntrada2, Pageable pageable);
	
	@Query(nativeQuery = true, value = "SELECT * FROM tb_guia WHERE DATA_SAIDA IS NULL")
	Page<Guia> findGuiaAtivos(Pageable pageable);
	
	@Modifying
	@Query(nativeQuery = true, value = "UPDATE tb_guia SET data_saida = :data WHERE id = :id") 
	public void checkoutGuia(Integer id, String data);

	@Query(nativeQuery = true, value = "SELECT caravana_id FROM tb_guia WHERE id = :guia")
	Long findIdCaravana(Long guia);
	
}
