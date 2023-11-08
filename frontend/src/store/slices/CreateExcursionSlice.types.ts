import { Excursion } from "src/commons/types/Excursion";

export interface ExcursionState {
    page: number;
    last: boolean;
    first: boolean;
    loading: boolean;
    excursions: Excursion[];
    totalPages: number;
    searchString: string;
}

export interface ExcursionStateType extends ExcursionState {
    fetchExcursions: () => void;
    createExcursions: (excursion: Excursion) => void;
    updateExcursion: (excursion: Excursion, id: number) => void;
    deleteExcursion: (id: number) => void;
    setPage: (page: number) => void;
    setSearchString: (searchString: string) => void;
}