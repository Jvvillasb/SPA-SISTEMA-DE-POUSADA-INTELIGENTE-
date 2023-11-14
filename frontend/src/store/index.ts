import { create } from 'zustand';

import { createClientSlice } from './slices/Client/createClientSlice';
import { ClientStateType } from './slices/Client/createClientSlice.types';
import { createExcursionSlice } from './slices/Excursion/createExcursionSlice';
import { ExcursionStateType } from './slices/Excursion/createExcursionSlice.types';
import { createGuideUserSlice } from './slices/GuideUser/createGuideUserSlice';
import { GuideUserStateType } from './slices/GuideUser/createGuideUserSlice.types';

interface StoreStateType
    extends ClientStateType,
        ExcursionStateType,
        GuideUserStateType {}

const useStore = create<StoreStateType>((...a) => ({
    ...createClientSlice(...a),
    ...createExcursionSlice(...a),
    ...createGuideUserSlice(...a),
}));

export default useStore;
