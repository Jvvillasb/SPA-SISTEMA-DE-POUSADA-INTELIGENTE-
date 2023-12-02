import { StateCreator } from 'zustand';

import {
    createExcursions,
    listExcursions,
    updateExcursion,
    deleteExcursion,
    listExcursionsBySearch,
} from '../../../components/ListExcursion/services/Excursion.service';

import { ExcursionStateType } from './createExcursionSlice.types';
import { Excursion } from '../../../commons/types/Excursion';

export const createExcursionSlice: StateCreator<ExcursionStateType> = (
    set,
    get
) => ({
    page: 0,
    last: false,
    first: true,
    excursions: [],
    loadingExcursion: false,
    totalPages: 0,
    searchStringExcursion: '',
    setPage: (page) => {
        set({ page });
    },
    fetchExcursions: async () => {
        set({ loadingExcursion: true });
        const { page, searchStringExcursion } = get();
        const {
            data: { first, last, content, totalPages },
        } = await listExcursions(page, searchStringExcursion);
        set({
            last,
            first,
            loadingExcursion: false,
            totalPages,
            excursions: content,
        });
    },
    fetchExcursionsBySearch: async () => {
        set({ loadingExcursion: true });
        const {
            data: { first, last, content, totalPages },
        } = await listExcursionsBySearch();
        set({
            last,
            first,
            loadingExcursion: false,
            totalPages,
            excursions: content,
        });
    },
    createExcursions: async (excursion: Excursion) => {
        set({ loadingExcursion: true });
        try {
            await createExcursions(excursion);
            get().fetchExcursions();
        } catch (error) {
            console.error('erro ao criar a excursão: ', error);
            set({ loadingExcursion: false });
        }
    },
    updateExcursion: async (excursion: Excursion, id: number) => {
        set({ loadingExcursion: true });
        try {
            await updateExcursion(excursion, id);
            get().fetchExcursions();
        } catch (error) {
            console.error('Erro ao atualizar a excursão: ', error);
            set({ loadingExcursion: false });
        }
    },
    deleteExcursion: async (id: number) => {
        set({ loadingExcursion: true });
        try {
            await deleteExcursion(id);
            get().fetchExcursions();
        } catch (error) {
            console.error('Erro ao deletar a excursão: ', error);
            set({ loadingExcursion: false });
        }
    },
    setsearchStringExcursion: (searchStringExcursion) => {
        set({ searchStringExcursion });
    },
});
