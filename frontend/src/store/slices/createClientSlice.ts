import { StateCreator } from "zustand";

import { listClients } from "./../../components/ListClients/services/client.service";
import { ClientStateType } from "./createClientSlice.types";

export const createClientSlice: StateCreator<ClientStateType> = (set, get) => ({
    page: 0,
    last: false,
    first: true,
    clients: [],
    loading: false,
    totalPages: 0,
    searchString: "",
    setPage: (page) => {
        set({page})
    },
    fetchClients: async () => {
        set({loading: true});
        const {page, searchString} = get();
        const {data: {first, last, content, totalPages}} = await listClients(page, searchString);
        set({
            last,
            first,
            loading: false,
            totalPages,
            clients: content,
        });
    },
    setSearchString: (searchString) => {
        set({searchString})
    }
});