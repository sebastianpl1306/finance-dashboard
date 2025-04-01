import { create } from 'zustand'
import { UiState } from '@/interfaces';

interface State extends UiState {
    toggleCreateTransactionModal: (newValue: boolean) => void;
    toggleCreateCategoryModal: (newValue: boolean) => void;
}

export const useUIStore = create<State>()((set) => ({
    isOpenCreateTransactionModal: false,
    isOpenCreateCategoryModal: false,
    toggleCreateTransactionModal: (newValue: boolean) => {
        set({ isOpenCreateTransactionModal: newValue })
    },
    toggleCreateCategoryModal: (newValue: boolean) => {
        set({ isOpenCreateCategoryModal: newValue })
    },
}))