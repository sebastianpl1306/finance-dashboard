import { Category } from "./category.interfaces";
import { Transaction } from "./transactions.interfaces";
import { ThemeEnum } from "./Ui.interfaces";

export interface UiState {
    isOpenUserOptionsMenu: boolean;
    isOpenCreateTransactionModal: boolean;
    isOpenCreateCategoryModal: boolean;
    theme: ThemeEnum;
}

export interface CategoryState {
    isOpenEditCategoryModal:boolean;
    currentCategory: Category | null;
}

export interface TransactionState {
    isOpenEditTransactionModal: boolean;
    currentTransaction: Transaction | null;
}