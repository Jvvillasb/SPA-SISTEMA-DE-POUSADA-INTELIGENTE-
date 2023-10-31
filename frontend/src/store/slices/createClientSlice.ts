import { StateCreator } from 'zustand';

import {
    createClients,
    listClients,
    updateClient,
    deleteClient,
} from './../../components/ListClients/services/client.service';
import { ClientStateType } from './createClientSlice.types';
import { Client } from '../../commons/types/Client';

export const createClientSlice: StateCreator<ClientStateType> = (set, get) => ({
    page: 0,
    last: false,
    first: true,
    clients: [],
    loading: false,
    totalPages: 0,
    searchString: '',
    setPage: (page) => {
        set({ page });
    },
    fetchClients: async () => {
        set({ loading: true });
        const { page, searchString } = get();
        const {
            data: { first, last, content, totalPages },
        } = await listClients(page, searchString);
        set({
            last,
            first,
            loading: false,
            totalPages,
            clients: content,
        });
    },
    createClients: async (client: Client) => {
        set({ loading: true });
        try {
            await createClients(client);
            await get().fetchClients();
        } catch (error) {
            console.error('erro ao criar o cliente: ', error);
            set({ loading: false });
        }
    },
    updateClient: async (client: Client, id: number) => {
        set({ loading: true });
        try {
            await updateClient(client, id);
            await get().fetchClients();
        } catch (error) {
            console.error('Erro ao atualizar o cliente: ', error);
            set({ loading: false });
        }
    },
    deleteClient: async (id: number) => {
        set({ loading: true });
        try {
            await deleteClient(id);
            await get().fetchClients();
        } catch (error) {
            console.error('Erro ao deletar o cliente: ', error);
            set({ loading: false });
        }
    },
    setSearchString: (searchString) => {
        set({ searchString });
    },
});
