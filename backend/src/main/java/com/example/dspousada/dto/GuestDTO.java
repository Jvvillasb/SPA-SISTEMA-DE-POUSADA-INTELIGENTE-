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
	private String dataEntrada;
	private String dataSaida;
	private String evento;
	
	private Long caravana;
	private String nomeCaravana;
	
	private Long guia;
	private String nomeGuia;
	
	private Long leito;
	
	private Integer numeroLeito;  
	private Long idQuarto;       
	private Integer numeroQuarto;
	private String nomeQuarto;    
	
	public GuestDTO() {
	}

	public GuestDTO(Long id, String nome, String documento, String dataNascimento, String telefone, String genero,
			String email, String cidade, String estado, String nacionalidade, String dataEntrada,
			String dataSaida, String evento, Long caravana, String nomeCaravana, Long guia, String nomeGuia, Long leito) {
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
		this.guia = guia;
		this.nomeGuia = nomeGuia;
		this.leito = leito;
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
		dataEntrada = guest.getDataEntrada();
		dataSaida = guest.getDataSaida();
		evento = guest.getEvento();
		caravana = guest.getCaravana().getId();
		nomeCaravana = guest.getCaravana().getNome();
		guia = guest.getGuia().getId();
		nomeGuia = guest.getGuia().getNome();
		leito = guest.getLeito().getId();
		if(guest.getLeito() != null) {
	        numeroLeito = guest.getLeito().getNumero();
	        if(guest.getLeito().getQuarto() != null) {
	            idQuarto = guest.getLeito().getQuarto().getId();
	            numeroQuarto = guest.getLeito().getQuarto().getNumero();
	            nomeQuarto = guest.getLeito().getQuarto().getNome();
	        }
	    }
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
	
	public String getEvento() {
		return evento;
	}
	
	public void setEvento(String evento) {
		this.evento = evento;
	}
	
	public Long getCaravana() {
		return caravana;
	}
	
	public void setCaravana(Long caravana) {
		this.caravana = caravana;
	}
	
	public String getNomeCaravana() {
		return nomeCaravana;
	}
	
	public void setNomeCaravana(String nomeCaravana) {
		this.nomeCaravana = nomeCaravana;
	}
	
	public Long getGuia() {
		return guia;
	}
	
	public void setGuia(Long guia) {
		this.guia = guia;
	}
	
	public String getNomeGuia() {
		return nomeGuia;
	}
	
	public void setNomeGuia(String nomeGuia) {
		this.nomeGuia = nomeGuia;
	}
	
	public Long getLeito() {
		return leito;
	}
	
	public void setLeito(Long leito) {
		this.leito = leito;
	}

	public Integer getNumeroLeito() {
		return numeroLeito;
	}

	public void setNumeroLeito(Integer numeroLeito) {
		this.numeroLeito = numeroLeito;
	}

	public Long getIdQuarto() {
		return idQuarto;
	}

	public void setIdQuarto(Long idQuarto) {
		this.idQuarto = idQuarto;
	}

	public Integer getNumeroQuarto() {
		return numeroQuarto;
	}

	public void setNumeroQuarto(Integer numeroQuarto) {
		this.numeroQuarto = numeroQuarto;
	}

	public String getNomeQuarto() {
		return nomeQuarto;
	}

	public void setNomeQuarto(String nomeQuarto) {
		this.nomeQuarto = nomeQuarto;
	}
	
	

}
