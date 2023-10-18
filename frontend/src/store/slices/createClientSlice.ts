import { StateCreator } from 'zustand';

import { listClients } from './../../components/ListClients/services/client.service';
import { ClientStateType } from './createClientSlice.types';

export const createClientSlice: StateCreator<ClientStateType> = (set, get) => ({
    page: 0,
    last: false,
    first: true,
    clients: [],
    loading: false,
<<<<<<< Updated upstream
=======
    totalPages: 0,
    searchString: '',
>>>>>>> Stashed changes
    setPage: (page) => {
        set({ page });
    },
    fetchClients: async () => {
<<<<<<< Updated upstream
        set({loading: true});
        const {data: {first, last, content}} = await listClients(get().page);
=======
        set({ loading: true });
        const { page, searchString } = get();
        const {
            data: { first, last, content, totalPages },
        } = await listClients(page, searchString);
>>>>>>> Stashed changes
        set({
            last,
            first,
            loading: false,
            clients: content,
        });
<<<<<<< Updated upstream
    }
});
=======
    },
    setSearchString: (searchString) => {
        set({ searchString });
    },
});
>>>>>>> Stashed changes
