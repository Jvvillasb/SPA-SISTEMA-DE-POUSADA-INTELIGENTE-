package com.example.dspousada.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name = "tb_quarto")
public class Quarto implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Integer numero;
	private String nome;
	@OneToMany(mappedBy = "quarto", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<Leito> leitos = new ArrayList<>();

	private String status;
	
	public Quarto() {
		
	}

	public Quarto(Long id, Integer numero, String nome, List<Leito> leitos, String status) {
		super();
		this.id = id;
		this.numero = numero;
		this.nome = nome;
		this.leitos = leitos;
		this.status = status;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public List<Leito> getLeitos() {
		return leitos;
	}

	public void setLeitos(List<Leito> leitos) {
		this.leitos = leitos;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	public Integer getNumero() {
		return numero;
	}
	
	public void setNumero(Integer numero) {
		this.numero = numero;
	}
	
	public String getNome() {
		return nome;
	}
	
	public void setNome(String nome) {
		this.nome = nome;
	}
	

}

