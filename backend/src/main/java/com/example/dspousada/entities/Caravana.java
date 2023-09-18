package com.example.dspousada.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tb_caravana")
public class Caravana implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String nome;
	private String cidade;
	
	@OneToOne(cascade = CascadeType.DETACH)
	@JoinColumn(name = "guia_id", nullable = true)
	private Guia guia;
	
	@OneToMany(mappedBy = "caravana", fetch = FetchType.LAZY, cascade = {CascadeType.DETACH})
	private List<Guest> guests;
	
	public Caravana() {
		
	}
	
	public Caravana(Long id, String nome, String cidade, Guia guia) {
		super();
		this.id = id;
		this.nome = nome;
		this.cidade = cidade;
		this.guia = guia;
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
	
	public Guia getGuia() {
		return guia;
	}
	
	public void setGuia(Guia guia) {
		this.guia = guia;
	}
	
	public List<Guest> getGuests() {
		return guests;
	}
	
	public void setGuests(List<Guest> guests) {
		this.guests = guests;
	}
}
