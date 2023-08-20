import { create } from 'zustand';

import { createClientSlice } from './slices/createClientSlice';
import { ClientStateType } from './slices/createClientSlice.types';

interface StoreStateType extends ClientStateType {};

const useStore = create<StoreStateType>((...a) => ({
    ...createClientSlice(...a),
}));

export default useStore;
