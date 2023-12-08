import { create } from 'zustand';

import { createClientSlice } from './slices/Client/createClientSlice';
import { ClientStateType } from './slices/Client/createClientSlice.types';
import { createExcursionSlice } from './slices/Excursion/createExcursionSlice';
import { ExcursionStateType } from './slices/Excursion/createExcursionSlice.types';
import { createGuideUserSlice } from './slices/GuideUser/createGuideUserSlice';
import { GuideUserStateType } from './slices/GuideUser/createGuideUserSlice.types';
import { createGuideRoomsSlice } from './slices/GuideRoom/createGuideRoomSlice';
import { GuideRoomsStateType } from './slices/GuideRoom/createGuideRoomSlice.types';
import { createBedroomSlice } from './slices/GuideRoom/Bedroom/createBedroomSlice';
import { BedroomStateType } from './slices/GuideRoom/Bedroom/createBedroomSlice.types';

interface StoreStateType
    extends ClientStateType,
        ExcursionStateType,
        GuideUserStateType,
        GuideRoomsStateType,
        BedroomStateType {}

const useStore = create<StoreStateType>((...a) => ({
    ...createClientSlice(...a),
    ...createExcursionSlice(...a),
    ...createGuideUserSlice(...a),
    ...createGuideRoomsSlice(...a),
    ...createBedroomSlice(...a),
}));

export default useStore;
