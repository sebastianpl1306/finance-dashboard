import { Category } from "./category.interfaces";

export interface UiState {
    isOpenCreateTransactionModal: boolean;
    isOpenCreateCategoryModal: boolean;
}

export interface CategoryState {
    isOpenEditCategoryModal:boolean;
    currentCategory: Category | null;
}