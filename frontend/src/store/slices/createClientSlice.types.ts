import { Client } from 'src/commons/types/Client';

export interface ClientState {
    page: number;
    last: boolean;
    first: boolean;
    loading: boolean;
    clients: Client[];
    totalPages: number;
    searchString: string;
}

export interface ClientStateType extends ClientState {
    fetchClients: () => void;
    setPage: (page: number) => void;
    setSearchString: (searchString: string) => void;
}
