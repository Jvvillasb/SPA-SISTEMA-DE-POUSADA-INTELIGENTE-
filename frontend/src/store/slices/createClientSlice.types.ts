import { Client } from 'src/commons/types/Client';

export type clientFilters = {
    excursionType: number;
}

export interface ClientState {
    page: number;
    last: boolean;
    first: boolean;
    loading: boolean;
    clients: Client[];
    totalPages: number;
    searchString: string;
    filters: clientFilters;
}

export interface ClientStateType extends ClientState {
    fetchClients: () => void;
    createClients: (client: Client) => void;
    updateClient: (client: Client, id: number) => void;
    setPage: (page: number) => void;
    setSearchString: (searchString: string) => void;
    setFilters: (filters: clientFilters) => void;
}
