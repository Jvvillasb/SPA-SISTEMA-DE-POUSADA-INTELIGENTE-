import { GuideRoom } from '../../../commons/types/GuideRoom';
import { Bedroom } from '../../../commons/types/Bedroom';

export interface GuideRoomState {
    page: number;
    last: boolean;
    first: boolean;
    loadingGuideRoom: boolean;
    guideRoom: GuideRoom[];
    bedroomsByCreationGuideRooms: Bedroom[];
    totalPages: number;
}

export interface GuideRoomsStateType extends GuideRoomState {
    fetchGuideRooms: () => void;
    fetchGuideRoomsBySearch: () => void;
    createGuideRooms: (GuideRoom: GuideRoom) => void;
    addBedroomsByCreationGuideRooms: (Bedroom: Bedroom) => void;
    removeBedroomsByCreationGuideRooms: (index: number) => void;
    updateGuideRooms: (GuideRoom: GuideRoom, id: number) => void;
    deleteGuideRooms: (id: number) => void;
    setPage: (page: number) => void;
}
