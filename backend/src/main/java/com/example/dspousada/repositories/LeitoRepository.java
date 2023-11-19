package com.example.dspousada.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.dspousada.entities.Leito;

@Repository
public interface LeitoRepository extends JpaRepository<Leito, Long>{
	
	@Modifying
	@Query(nativeQuery = true, value = "UPDATE tb_leito SET guest_id = :id WHERE id = :leitoId")
	public void checkinLeito(Long id, Long leitoId);
	
	@Modifying
	@Query(nativeQuery = true, value = "UPDATE tb_leito SET status = 'ocupado' WHERE id = :leitoId")
	public void updateStatus(Long leitoId);
	
	@Modifying
	@Query(nativeQuery = true, value = "UPDATE tb_leito SET status = 'disponível' WHERE guest_id = :id")
	public void updateStatusDisponivel(Integer id);
	
	@Modifying
	@Query(nativeQuery = true, value = "UPDATE tb_leito SET guest_id = NULL WHERE guest_id = :id")
	public void updateGuestIdToNull(Integer id);
	
	@Query(nativeQuery = true, value = "SELECT * FROM tb_leito WHERE id != 1")
	Page<Leito> findAllWithout1(Pageable pageable);

}
