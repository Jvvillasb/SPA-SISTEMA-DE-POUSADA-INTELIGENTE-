import { StateCreator } from 'zustand';

import {
    createGuideUser,
    listGuideUser,
    updateGuideUser,
    deleteGuideUser,
    listGuidesBySearch,
} from '../../../components/ListGuideUsers/services/GuideUser.service';

import { GuideUserStateType } from './createGuideUserSlice.types';
import { GuideUser } from '../../../commons/types/GuideUser';

export const createGuideUserSlice: StateCreator<GuideUserStateType> = (set, get) => ({
    page: 0,
    last: false,
    first: true,
    GuideUsers: [],
    loadingGuideUser: false,
    totalPages: 0,
    searchString: '',
    setPage: (page) => {
        set({ page });
    },
    fetchGuideUser: async () => {
        set({ loadingGuideUser: true });
        const { page, searchString } = get();
        const {
            data: { first, last, content, totalPages },
        } = await listGuideUser(page, searchString);
        set({
            last,
            first,
            loadingGuideUser: false,
            totalPages,
            GuideUsers: content,
        });
    },
    createGuideUser: async (GuideUser: GuideUser) => {
        set({ loadingGuideUser: true });
        try {
            await createGuideUser(GuideUser);
            get().fetchGuideUser();
        } catch (error) {
            console.error('erro ao criar o guia: ', error);
            set({ loadingGuideUser: false });
        }
    },
    updateGuideUser: async (GuideUser: GuideUser, id: number) => {
        set({ loadingGuideUser: true });
        try {
            await updateGuideUser(GuideUser, id);
            get().fetchGuideUser();
        } catch (error) {
            console.error('Erro ao atualizar o guia: ', error);
            set({ loadingGuideUser: false });
        }
    },
    deleteGuideUser: async (id: number) => {
        set({ loadingGuideUser: true });
        try {
            await deleteGuideUser(id);
            get().fetchGuideUser();
        } catch (error) {
            console.error('Erro ao deletar o guia: ', error);
            set({ loadingGuideUser: false });
        }
    },
    setSearchString: (searchString) => {
        set({ searchString });
    },
    fetchGuideUsersBySearch: async () => {
        set({ loadingGuideUser: true });
        const {
            data: { first, last, content, totalPages },
        } = await listGuidesBySearch();
        set({
            last,
            first,
            loadingGuideUser: false,
            totalPages,
            GuideUsers: content,
        });
    },
});


