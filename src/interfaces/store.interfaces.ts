import { Category } from "./category.interfaces";
import { Transaction } from "./transactions.interfaces";

export interface UiState {
    isOpenCreateTransactionModal: boolean;
    isOpenCreateCategoryModal: boolean;
}

export interface CategoryState {
    isOpenEditCategoryModal:boolean;
    currentCategory: Category | null;
}

export interface TransactionState {
    isOpenEditTransactionModal: boolean;
    currentTransaction: Transaction | null;
}