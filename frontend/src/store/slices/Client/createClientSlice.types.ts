import { Client } from 'src/commons/types/Client';

export type clientFilters = {
    excursionType: number;
    ativo?: string;
};

export interface ClientState {
    page: number;
    last: boolean;
    first: boolean;
    loading: boolean;
    clients: Client[];
    totalPages: number;
    searchStringClient: string;
    filters: clientFilters;
}

export interface ClientStateType extends ClientState {
    fetchClients: () => void;
    createClients: (client: Client) => void;
    updateClient: (client: Client, id: number) => void;
    deleteClient: (id: number) => void;
    setPage: (page: number) => void;
    setsearchStringClient: (searchStringClient: string) => void;
    setFilters: (filters: clientFilters) => void;
}
