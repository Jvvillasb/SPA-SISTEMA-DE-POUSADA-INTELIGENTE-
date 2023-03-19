package com.example.dspousada.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.dspousada.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

}
