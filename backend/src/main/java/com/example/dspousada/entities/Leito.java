package com.example.dspousada.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tb_leito")
public class Leito implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private Integer numero;

	@ManyToOne
	@JoinColumn(name = "quarto_id", nullable = false)
	private Quarto quarto;

	@OneToOne
	@JoinColumn(name = "guest_id", unique = true, nullable = true)
	private Guest guest;

	private String status;
	
	public Leito() {
		
	}
	
	public Leito(Long id, Integer numero, Quarto quarto, Guest guest, String status) {
		super();
		this.id = id;
		this.numero = numero;
		this.quarto = quarto;
		this.guest = guest;
		this.status = status;
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

	public Quarto getQuarto() {
		return quarto;
	}

	public void setQuarto(Quarto quarto) {
		this.quarto = quarto;
	}

	public Guest getGuest() {
		return guest;
	}

	public void setGuest(Guest guest) {
		this.guest = guest;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	
}
