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
@Table(name = "tb_guia")
public class Guia implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String nome;
	private String documento;
	private String dataNascimento; 
	private String telefone;
	private String genero;
	private String email;
	private String cidade;
	private String estado;
	private String nacionalidade;
	private String dataEntrada; 
	private String dataSaida;
	private String evento;
	private String nomeCaravana;
	
	@OneToOne(cascade = CascadeType.DETACH)
	@JoinColumn(name = "caravana_id")
	private Caravana caravana;
	
	@OneToMany(mappedBy = "caravana", fetch = FetchType.LAZY, cascade = {CascadeType.DETACH})
	private List<Guest> guests;
	
	public Guia() {
		
	}

	public Guia(Long id, String nome, String documento, String dataNascimento, String telefone, String genero,
			String email, String cidade, String estado, String nacionalidade, String dataEntrada,
			String dataSaida, String evento, Caravana caravana, String nomeCaravana) {
		super();
		this.id = id;
		this.nome = nome;
		this.documento = documento;
		this.dataNascimento = dataNascimento;
		this.telefone = telefone;
		this.genero = genero;
		this.email = email;
		this.cidade = cidade;
		this.estado = estado;
		this.nacionalidade = nacionalidade;
		this.dataEntrada = dataEntrada;
		this.dataSaida = dataSaida;
		this.evento = evento;
		this.caravana = caravana;
		this.nomeCaravana = nomeCaravana;
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


	public String getDocumento() {
		return documento;
	}


	public void setDocumento(String documento) {
		this.documento = documento;
	}


	public String getDataNascimento() {
		return dataNascimento;
	}


	public void setDataNascimento(String dataNascimento) {
		this.dataNascimento = dataNascimento;
	}


	public String getTelefone() {
		return telefone;
	}


	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}


	public String getGenero() {
		return genero;
	}


	public void setGenero(String genero) {
		this.genero = genero;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getCidade() {
		return cidade;
	}


	public void setCidade(String cidade) {
		this.cidade = cidade;
	}
	
	public String getEvento() {
		return evento;
	}
	
	public void setEvento(String evento) {
		this.evento = evento;
	}


	public String getEstado() {
		return estado;
	}


	public void setEstado(String estado) {
		this.estado = estado;
	}


	public String getNacionalidade() {
		return nacionalidade;
	}


	public void setNacionalidade(String nacionalidade) {
		this.nacionalidade = nacionalidade;
	}

	public String getDataEntrada() {
		return dataEntrada;
	}


	public void setDataEntrada(String dataEntrada) {
		this.dataEntrada = dataEntrada;
	}


	public String getDataSaida() {
		return dataSaida;
	}


	public void setDataSaida(String dataSaida) {
		this.dataSaida = dataSaida;
	}
	
	public Caravana getCaravana() {
		return caravana;
	}
	
	public void setCaravana(Caravana caravana) {
		this.caravana = caravana;
	}
	
	public String getNomeCaravana() {
		return nomeCaravana;
	}
	
	public void setNomeCaravana(String nomeCaravana) {
		this.nomeCaravana = nomeCaravana;
	}
	
	public List<Guest> getGuests() {
		return guests;
	}
	
	public void setGuests(List<Guest> guests) {
		this.guests = guests;
	}
}
