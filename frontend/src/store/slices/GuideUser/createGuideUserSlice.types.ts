import { GuideUser } from 'src/commons/types/GuideUser';

export type guideUserFilters = {
    excursionType: number;
};

export interface GuideUserState {
    pageGuideUser: number;
    last: boolean;
    first: boolean;
    loadingGuideUser: boolean;
    GuideUsers: GuideUser[];
    totalPages: number;
    searchStringGuideUser: string;
}

export interface GuideUserStateType extends GuideUserState {
    fetchGuideUser: () => void;
    createGuideUser: (GuideUser: GuideUser) => void;
    updateGuideUser: (GuideUser: GuideUser, id: number) => void;
    deleteGuideUser: (id: number) => void;
    setPageGuideUser: (page: number) => void;
    setsearchStringGuideUser: (searchStringGuideUser: string) => void;
    fetchGuideUsersBySearch: () => void;
}
