package com.example.dspousada.dto;

import java.io.Serializable;

import com.example.dspousada.entities.Leito;


public class LeitoDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private Long id;
	private Integer numero;
	private Long quarto;
	private Long guest;
	private String status;
	
	public LeitoDTO() {
		
	}
	
	public LeitoDTO(Long id, Integer numero, Long quarto, Long guest, String status) {
		super();
		this.id = id;
		this.numero = numero;
		this.quarto = quarto;
		this.guest = guest;
		this.status = status;
	}
	
	public LeitoDTO(Leito leito) {
		super();
		id = leito.getId();
		numero = leito.getNumero();
		quarto = (leito.getQuarto() != null) ? leito.getQuarto().getId() : null;
	    guest = (leito.getGuest() != null) ? leito.getGuest().getId() : null;
		status = leito.getStatus();
	}
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public Integer getNumero() {
		return numero;
	}
	
	public void setNumero(Integer numero) {
		this.numero = numero;
	}
	
	public Long getQuarto() {
		return quarto;
	}
	
	public void setQuarto(Long quarto) {
		this.quarto = quarto;
	}
	
	public Long getGuest() {
		return guest;
	}
	
	public void setGuest(Long guest) {
		this.guest = guest;
	}
	
	public String getStatus() {
		return status;
	}
	
	public void setStatus(String status) {
		this.status = status;
	}

}
