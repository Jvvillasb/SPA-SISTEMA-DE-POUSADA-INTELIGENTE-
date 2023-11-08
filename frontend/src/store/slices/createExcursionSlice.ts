import { StateCreator } from 'zustand';

import {
    createExcursions,
    listExcursions,
    updateExcursion,
    deleteExcursion,
} from './../../components/ListExcursion/services/Excursion.service';

import { ExcursionStateType } from './CreateExcursionSlice.types';
import { Excursion } from '../../commons/types/Excursion';

export const createExcursionSlice: StateCreator<ExcursionStateType> = (set, get) => ({
    page: 0,
    last: false,
    first: true,
    excursions: [],
    loading: false,
    totalPages: 0,
    searchString: '',
    setPage: (page) => {
        set({ page });
    },
    fetchExcursions: async () => {
        set({ loading: true });
        const { page, searchString } = get();
        const {
            data: { first, last, content, totalPages },
        } = await listExcursions(page, searchString);
        set({
            last,
            first,
            loading: false,
            totalPages,
            excursions: content,
        });
    },
    createExcursions: async (excursion: Excursion) => {
        set({ loading: true });
        try {
            await createExcursions(excursion);
            get().fetchExcursions();
        } catch (error) {
            console.error('erro ao criar a excursão: ', error);
            set({ loading: false });
        }
    },
    updateExcursion: async (excursion: Excursion, id: number) => {
        set({ loading: true });
        try {
            await updateExcursion(excursion, id);
            get().fetchExcursions();
        } catch (error) {
            console.error('Erro ao atualizar a excursão: ', error);
            set({ loading: false });
        }
    },
    deleteExcursion: async (id: number) => {
        set({ loading: true });
        try {
            await deleteExcursion(id);
            get().fetchExcursions();
        } catch (error) {
            console.error('Erro ao deletar a excursão: ', error);
            set({ loading: false });
        }
    },
    setSearchString: (searchString) => {
        set({ searchString });
    }
});


