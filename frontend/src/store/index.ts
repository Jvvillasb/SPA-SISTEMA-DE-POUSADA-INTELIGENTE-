import { create } from 'zustand';

import { createClientSlice } from './slices/createClientSlice';
import { ClientStateType } from './slices/createClientSlice.types';
import { createExcursionSlice } from './slices/createExcursionSlice';
import { ExcursionStateType } from './slices/CreateExcursionSlice.types';

interface StoreStateType extends ClientStateType, ExcursionStateType { }

const useStore = create<StoreStateType>((...a) => ({
    ...createClientSlice(...a),
    ...createExcursionSlice(...a),
}));

export default useStore;
