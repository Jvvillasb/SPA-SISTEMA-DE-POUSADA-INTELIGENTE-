import { GuideUser } from 'src/commons/types/GuideUser';

export type guideUserFilters = {
    excursionType: number;
};

export interface GuideUserState {
    page: number;
    last: boolean;
    first: boolean;
    loadingGuideUser: boolean;
    GuideUsers: GuideUser[];
    totalPages: number;
    searchString: string;
}

export interface GuideUserStateType extends GuideUserState {
    fetchGuideUser: () => void;
    createGuideUser: (GuideUser: GuideUser) => void;
    updateGuideUser: (GuideUser: GuideUser, id: number) => void;
    deleteGuideUser: (id: number) => void;
    setPage: (page: number) => void;
    setSearchString: (searchString: string) => void;
    fetchGuideUsersBySearch: () => void;
}
