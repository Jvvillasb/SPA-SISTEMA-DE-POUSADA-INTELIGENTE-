package com.example.dspousada.dto;

import java.io.Serializable;

import com.example.dspousada.entities.Guest;

public class GuestDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	
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
	private Boolean caravana;
	private String dataEntrada;
	private String dataSaida;
	
	public GuestDTO() {
	}

	public GuestDTO(Long id, String nome, String documento, String dataNascimento, String telefone, String genero,
			String email, String cidade, String estado, String nacionalidade, Boolean caravana, String dataEntrada,
			String dataSaida) {
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
		this.caravana = caravana;
		this.dataEntrada = dataEntrada;
		this.dataSaida = dataSaida;
	}
	
	public GuestDTO(Guest guest) {
		super();
		id = guest.getId();
		nome = guest.getNome();
		documento = guest.getDocumento();
		dataNascimento = guest.getDataNascimento();
		telefone = guest.getTelefone();
		genero = guest.getGenero();
		email = guest.getEmail();
		cidade = guest.getCidade();
		estado = guest.getEstado();
		nacionalidade = guest.getNacionalidade();
		caravana = guest.getCaravana();
		dataEntrada = guest.getDataEntrada();
		dataSaida = guest.getDataSaida();
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

	public Boolean getCaravana() {
		return caravana;
	}

	public void setCaravana(Boolean caravana) {
		this.caravana = caravana;
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

	
	
}
