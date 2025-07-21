import { create } from 'zustand'
import { ThemeEnum, UiState } from '@/interfaces';

interface State extends UiState {
    toggleUserOptionsMenu: (newValue: boolean) => void;
    toggleCreateTransactionModal: (newValue: boolean) => void;
    toggleCreateCategoryModal: (newValue: boolean) => void;
    changeTheme: (newTheme: ThemeEnum) => void
}

export const useUIStore = create<State>()((set) => ({
    isOpenUserOptionsMenu: false,
    isOpenCreateTransactionModal: false,
    isOpenCreateCategoryModal: false,
    theme: ThemeEnum.THEME_DARK,
    toggleUserOptionsMenu: (newValue: boolean) => {
        set({ isOpenUserOptionsMenu: newValue })
    },
    toggleCreateTransactionModal: (newValue: boolean) => {
        set({ isOpenCreateTransactionModal: newValue })
    },
    toggleCreateCategoryModal: (newValue: boolean) => {
        set({ isOpenCreateCategoryModal: newValue })
    },
    changeTheme: (newTheme: ThemeEnum) => {
        set({ theme: newTheme })
    }
}))