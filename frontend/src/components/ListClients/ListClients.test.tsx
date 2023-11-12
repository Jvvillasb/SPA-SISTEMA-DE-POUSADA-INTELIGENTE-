import React from 'react';
import { render, screen, act } from '@testing-library/react';
import ListClients from './ListClients';
import useStore from '../../store';
import { create } from 'zustand';

jest.mock('../../store');
const mockedUseStore = useStore as jest.MockedFunction<typeof useStore>;

interface Clients {
    id: string;
    name: string;
}

describe('<ListClients />', () => {
    let mockFetchClient: jest.Mock;
    let mockPage: number;
    let mockClients: Clients[];
    let mockLoading: boolean;

    beforeEach(() => {
        mockFetchClient = jest.fn();
        mockPage = 1;
        mockClients = [{ id: '1', name: 'Teste' }];
        mockLoading = false;

        const mockState = create(() => ({
            page: mockPage,
            clients: mockClients,
            loading: mockLoading,
            fetchClients: mockFetchClient,
        }));

        mockedUseStore.mockImplementation(mockState);
    });

    it('should render correctly', () => {
        render(<ListClients />);

        expect(screen.getByText('Nome do Cliente:')).toBeInTheDocument();
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
            fetchClients: mockFetchClient,
        }));

        mockedUseStore.mockImplementation(mockState);

        render(<ListClients />);

        expect(
            screen.getByText('Carregando os clientes...')
        ).toBeInTheDocument();
    });
});
