package com.example.dspousada.dto;

import java.io.Serializable;
import java.util.List;

import com.example.dspousada.entities.Caravana;
import com.example.dspousada.entities.Guest;

public class CaravanaDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String nome;
	private String cidade;
	private Long guia;
	
	private List<Guest> guests;

	public CaravanaDTO() {
	}

	public CaravanaDTO(Long id, String nome, String cidade, Long guia) {
		super();
		this.id = id;
		this.nome = nome;
		this.cidade = cidade;
		this.guia = guia;
	}
	
	public CaravanaDTO(Caravana guest) {
		super();
		id = guest.getId();
		nome = guest.getNome();
		cidade = guest.getCidade();
		guia = guest.getGuia().getId();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}
	
	public Long getGuia() {
		return guia;
	}
	
	public void setGuia(Long guia) {
		this.guia = guia;
	}
	
	public List<Guest> getGuests() {
		return guests;
	}
	
	public void setGuests(List<Guest> guests) {
		this.guests = guests;
	}
}
