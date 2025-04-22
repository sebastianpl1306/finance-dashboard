import { Category } from "./category.interfaces";

export interface ResponseGetTransactions {
    ok:           boolean;
    msg?:         string;
    transactions: Transaction[];
    page:         number;
    totalPages:   number;
}

export interface ResponseCreateTransaction {
    ok:           boolean;
    msg?:         string;
    transaction?: Transaction | null;
}

export interface Transaction {
    _id:         string;
    name:        string;
    description: string;
    value:       number;
    type:        TypesTransaction;
    category:    Category;
    user:        string;
    date:        Date;
    createdAt:   Date;
    updatedAt:   Date;
    __v:         number;
}

export enum TypesTransaction {
    INCOME = 'income',
    EXPENSE = 'expense'
}

export interface ResponseGetTransactionsDates {
    ok:    boolean;
    msg?:  string;
    dates: DateElement[];
}

export interface DateElement {
    _id:   ID;
    count: number;
}

export interface ID {
    year:  number;
    month: number;
}
