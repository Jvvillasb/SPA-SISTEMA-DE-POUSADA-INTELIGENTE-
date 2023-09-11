import React from 'react';
import { render, screen } from '@testing-library/react';
import { ClientListItem } from './ClientListItem';
import { Client } from '../../../../commons/types/Client';

describe('ClientListItem', () => {
  const mockClient: Client = {
    caravana: true,
    cidade: 'São Paulo',
    dataEntrada: '2021-08-01',
    dataNascimento: '1990-01-01',
    dataSaida: '2021-08-10',
    documento: '123.456.789-00',
    email: 'johndoe@example.com',
    estado: 'SP',
    genero: 'Masculino',
    id: 1,
    nacionalidade: 'Brasileiro',
    nome: 'John Doe',
    telefone: '(11) 99999-9999',
  };

  beforeEach(() => {
    render(<ClientListItem client={mockClient} />);
  });

  it('renders client name', () => {
    const nameElement = screen.getByText(/Nome do Cliente: John Doe/i);
    expect(nameElement).toBeInTheDocument();
  });

  it('renders client CPF', () => {
    const cpfElement = screen.getByText(/CPF: 123.456.789-00/i);
    expect(cpfElement).toBeInTheDocument();
  });

  it('renders client telefone', () => {
    const telefoneElement = screen.getByText(/Telefone: \(11\) 99999-9999/i);
    expect(telefoneElement).toBeInTheDocument();
  });
});
