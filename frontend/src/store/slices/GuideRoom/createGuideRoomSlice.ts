import { StateCreator } from 'zustand';

import {
    createGuideRooms,
    listGuideRooms,
    updateGuideRooms,
    deleteGuideRooms,
    listGuideRoomsBySearch,
} from '../../../components/ListGuideRooms/Services/GuideRoom.service';

import { GuideRoomsStateType } from './createGuideRoomSlice.types';
import { GuideRoom } from '../../../commons/types/GuideRoom';
import { Bedroom } from '../../../commons/types/Bedroom';
import { createBedrooms } from '../../../components/ListGuideRooms/Bedrooms/Services/Bedroom.service';

export const createGuideRoomsSlice: StateCreator<GuideRoomsStateType> = (
    set,
    get
) => ({
    page: 0,
    last: false,
    first: true,
    guideRoom: [],
    bedroomsByCreationGuideRooms: [],
    loadingGuideRoom: false,
    totalPages: 0,
    setPage: (page) => {
        set({ page });
    },
    fetchGuideRooms: async () => {
        set({ loadingGuideRoom: true });
        const { page } = get();
        const {
            data: { first, last, content, totalPages },
        } = await listGuideRooms(page);
        set({
            last,
            first,
            loadingGuideRoom: false,
            totalPages,
            guideRoom: content,
        });
    },
    fetchGuideRoomsBySearch: async () => {
        set({ loadingGuideRoom: true });
        const {
            data: { first, last, content, totalPages },
        } = await listGuideRoomsBySearch();
        set({
            last,
            first,
            loadingGuideRoom: false,
            totalPages,
            guideRoom: content,
        });
    },
    createGuideRooms: async (GuideRoom: GuideRoom) => {
        set({ loadingGuideRoom: true });
        try {
            const createdGuideRoom = await createGuideRooms(GuideRoom);
            const newId = createdGuideRoom.id;

            const updatedBedrooms = get().bedroomsByCreationGuideRooms.map((bedroom) => ({
                ...bedroom,
                "quarto": newId,
            }));


            await Promise.all(updatedBedrooms.map((bedroom) => createBedrooms(bedroom)));
            get().fetchGuideRooms();
        } catch (error) {
            console.error('erro ao criar a excursão: ', error);
            set({ loadingGuideRoom: false });
        }
    },
    addBedroomsByCreationGuideRooms: (bedroomsByCreationGuideRooms: Bedroom) => set((state) => ({ bedroomsByCreationGuideRooms: [...state.bedroomsByCreationGuideRooms, bedroomsByCreationGuideRooms] })),
    removeBedroomsByCreationGuideRooms: (index: number) => set((state) => ({
        bedroomsByCreationGuideRooms: state.bedroomsByCreationGuideRooms.filter((_, i) => i !== index),
    })),
    updateGuideRooms: async (GuideRoom: GuideRoom, id: number) => {
        set({ loadingGuideRoom: true });
        try {
            await updateGuideRooms(GuideRoom, id);
            get().fetchGuideRooms();
        } catch (error) {
            console.error('Erro ao atualizar a excursão: ', error);
            set({ loadingGuideRoom: false });
        }
    },
    deleteGuideRooms: async (id: number) => {
        set({ loadingGuideRoom: true });
        try {
            await deleteGuideRooms(id);
            get().fetchGuideRooms();
        } catch (error) {
            console.error('Erro ao deletar a excursão: ', error);
            set({ loadingGuideRoom: false });
        }
    }
});
