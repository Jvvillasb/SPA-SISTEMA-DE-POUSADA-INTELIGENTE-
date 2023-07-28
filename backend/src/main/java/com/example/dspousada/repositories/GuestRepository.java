package com.example.dspousada.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.dspousada.entities.Guest;

@Repository
public interface GuestRepository extends JpaRepository<Guest, Long>{

	Guest findByNome(String nome);
}
