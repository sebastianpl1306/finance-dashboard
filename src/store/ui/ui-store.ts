import { create } from 'zustand'
import { UiState } from '@/interfaces';

interface State extends UiState {
    toggleCreateTransactionModal: (newValue: boolean) => void;
}

export const useUIStore = create<State>()((set) => ({
    isOpenCreateTransactionModal: false,
    toggleCreateTransactionModal: (newValue: boolean) => {
        set({ isOpenCreateTransactionModal: newValue })
    },
}))