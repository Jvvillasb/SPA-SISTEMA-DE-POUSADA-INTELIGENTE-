package com.example.dspousada.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.example.dspousada.entities.Quarto;

public class QuartoDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private Long id;
	private Integer numero;
	private String nome;
	private List<LeitoDTO> leitos = new ArrayList<>();
	private String status;
	
	public QuartoDTO() {
	}
	
	public QuartoDTO(Long id, Integer numero, String nome, List<LeitoDTO> leitos, String status) {
		super();
		this.id = id;
		this.numero = numero;
		this.nome = nome;
		this.leitos = leitos;
		this.status = status;
	}
	
	public QuartoDTO(Quarto quarto) {
		super();
		id = quarto.getId();
		numero = quarto.getNumero();
		nome = quarto.getNome();
		status = quarto.getStatus();
		quarto.getLeitos().forEach(leito -> this.leitos.add(new LeitoDTO(leito)));
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public List<LeitoDTO> getLeitos() {
		return leitos;
	}

	public void setLeitos(List<LeitoDTO> leitos) {
		this.leitos = leitos;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	public String getNome() {
		return nome;
	}
	
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public Integer getNumero() {
		return numero;
	}
	
	public void setNumero(Integer numero) {
		this.numero = numero;
	}

}
