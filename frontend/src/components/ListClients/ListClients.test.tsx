import * as React from 'react';
import { render, screen, act } from '@testing-library/react';
import ListClients from './ListClients';
import useStore from '../../store';
import { create } from 'zustand';
import { Client } from '../../commons/types/Client';

jest.mock('../../store');
const mockedUseStore = useStore as jest.MockedFunction<typeof useStore>;

jest.mock('../../commons/ui/AlertDialog/AlertDialog', () => ({
    __esModule: true,
    default: () => <></>,
}));

interface Excursions {
    id: string;
    name: string;
}

describe('<ListClients />', () => {
    let mockFetchClient: jest.Mock;
    let mockFetchExcursions: jest.Mock;
    let mockPage: number;
    let mockClients: Client[];
    let mockLoading: boolean;
    let mockExcursions: Excursions[];
    let mockFilters: { page: number; name: string };
    beforeEach(() => {
        mockFetchClient = jest.fn();
        mockFetchExcursions = jest.fn();
        mockFilters = { page: 1, name: '' };
        mockPage = 1;
        mockClients = [
            {
                id: 0,
                nome: 'teste',
                email: '',
                telefone: '',
                cidade: '',
                estado: '',
                caravana: 0,
                nomeCaravana: '',
                dataEntrada: '',
                dataNascimento: '',
                dataSaida: '',
                documento: '',
                genero: 'Masculino',
                nacionalidade: '',
                guia: 0,
                nomeGuia: '',
                evento: '',
                leito: 1,
                numeroLeito: 1,
                nomeQuarto: '',
            },
        ];
        mockExcursions = [{ id: '1', name: 'Teste' }];
        mockLoading = false;

        const mockState = create(() => ({
            page: mockPage,
            clients: mockClients,
            loading: mockLoading,
            excursions: mockExcursions,
            fetchClients: mockFetchClient,
            fetchExcursionsBySearch: mockFetchExcursions,
            filters: mockFilters,
        }));

        mockedUseStore.mockImplementation(mockState);
    });

    it('should render correctly', () => {
        act(() => {
            render(<ListClients />);
        });
        expect(screen.getByText('teste')).toBeInTheDocument();
    });

    it('should call fetchClients on mount', () => {
        act(() => {
            render(<ListClients />);
        });

        expect(mockFetchClient).toHaveBeenCalled();
    });

    it('should render loading message when loading is true', () => {
        mockLoading = true;

        const mockState = create(() => ({
            page: mockPage,
            clients: mockClients,
            loading: mockLoading,
            excursions: mockExcursions,
            fetchClients: mockFetchClient,
            fetchExcursionsBySearch: mockFetchExcursions,
        }));

        mockedUseStore.mockImplementation(mockState);

        render(<ListClients />);

        expect(screen.getByText('Carregando Clientes')).toBeInTheDocument();
    });
});
