import { StateCreator } from 'zustand';

import {
    createBedrooms,
    listBedrooms,
    updateBedrooms,
    deleteBedrooms,
    listBedroomsBySearch,
} from '../../../../components/ListGuideRooms/Bedrooms/Services/Bedroom.service';

import { BedroomStateType } from './createBedroomSlice.types';
import { Bedroom } from '../../../../commons/types/Bedroom';

export const createBedroomSlice: StateCreator<BedroomStateType> = (
    set,
    get
) => ({
    page: 0,
    last: false,
    first: true,
    bedrooms: [],
    loadingBedroom: false,
    totalPages: 0,
    setPage: (page) => {
        set({ page });
    },
    fetchBedrooms: async () => {
        set({ loadingBedroom: true });
        const { page } = get();
        const {
            data: { first, last, content, totalPages },
        } = await listBedrooms(page);
        set({
            last,
            first,
            loadingBedroom: false,
            totalPages,
            bedrooms: content,
        });
    },
    fetchBedroomsBySearch: async () => {
        set({ loadingBedroom: true });
        const {
            data: { first, last, content, totalPages },
        } = await listBedroomsBySearch();
        set({
            last,
            first,
            loadingBedroom: false,
            totalPages,
            bedrooms: content,
        });
    },
    createBedrooms: async (Bedroom: Bedroom) => {
        set({ loadingBedroom: true });
        try {
            await createBedrooms(Bedroom);
            get().fetchBedrooms();
        } catch (error) {
            console.error('erro ao criar o leito: ', error);
            set({ loadingBedroom: false });
        }
    },
    updateBedrooms: async (Bedroom: Bedroom, id: number) => {
        set({ loadingBedroom: true });
        try {
            await updateBedrooms(Bedroom, id);
            get().fetchBedrooms();
        } catch (error) {
            console.error('Erro ao atualizar o leito: ', error);
            set({ loadingBedroom: false });
        }
    },
    deleteBedrooms: async (id: number) => {
        set({ loadingBedroom: true });
        try {
            await deleteBedrooms(id);
            get().fetchBedrooms();
        } catch (error) {
            console.error('Erro ao deletar o leito: ', error);
            set({ loadingBedroom: false });
        }
    }
});
