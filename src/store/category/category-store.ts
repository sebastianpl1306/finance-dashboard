import { create } from 'zustand'
import { Category, CategoryState } from '@/interfaces';

interface State extends CategoryState {
    toggleUpdateCategoryModal: (newValue: boolean) => void;
    setCurrentCategory: (category: Category | null) => void;
}

export const useCategoryStore = create<State>()((set) => ({
    isOpenEditCategoryModal: false,
    currentCategory: null,
    toggleUpdateCategoryModal: (newValue: boolean) => {
        set({ isOpenEditCategoryModal: newValue })
    },
    setCurrentCategory: (category: Category | null) => {
        set({ currentCategory: category })
    }
}))