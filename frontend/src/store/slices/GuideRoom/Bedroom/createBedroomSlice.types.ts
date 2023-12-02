import { Bedroom } from 'src/commons/types/Bedroom';

export interface BedroomState {
    page: number;
    last: boolean;
    first: boolean;
    loadingBedroom: boolean;
    bedrooms: Bedroom[];
    totalPages: number;
}

export interface BedroomStateType extends BedroomState {
    fetchBedrooms: () => void;
    fetchBedroomsBySearch: () => void;
    createBedrooms: (Bedroom: Bedroom) => void;
    updateBedrooms: (Bedroom: Bedroom, id: number) => void;
    deleteBedrooms: (id: number) => void;
    setPage: (page: number) => void;
    resetBedroomState: () => void;
}
