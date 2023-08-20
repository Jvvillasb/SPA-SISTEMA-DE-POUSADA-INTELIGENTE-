import { StateCreator } from "zustand";

import { listClients } from "./../../components/ListClients/services/client.service";
import { ClientStateType } from "./createClientSlice.types";

export const createClientSlice: StateCreator<ClientStateType> = (set, get) => ({
    page: 0,
    last: false,
    first: true,
    clients: [],
    loading: false,
    setPage: (page) => {
        set({page})
    },
    fetchClients: async () => {
        set({loading: true});
        const {data: {first, last, content}} = await listClients(get().page);
        set({
            last,
            first,
            loading: false,
            clients: content,
        });
    }
});