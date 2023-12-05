import { Excursion } from 'src/commons/types/Excursion';

export interface ExcursionState {
    pageExcursion: number;
    last: boolean;
    first: boolean;
    loadingExcursion: boolean;
    excursions: Excursion[];
    totalPages: number;
    searchStringExcursion: string;
}

export interface ExcursionStateType extends ExcursionState {
    fetchExcursions: () => void;
    fetchExcursionsBySearch: () => void;
    createExcursions: (excursion: Excursion) => void;
    updateExcursion: (excursion: Excursion, id: number) => void;
    deleteExcursion: (id: number) => void;
    setPageExcursion: (page: number) => void;
    setsearchStringExcursion: (searchStringExcursion: string) => void;
}
