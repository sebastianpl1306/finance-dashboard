import { Category } from "./category.interfaces";

export interface ResponseGetGeneralStats {
    ok:               boolean;
    msg?:             string;
    summaryLastMonth?: SummaryLast;
    summaryLastYear?:  SummaryLast;
}

export interface SummaryLast {
    total:    number;
    obtained: number;
    spent:    number;
}

export interface ResponseGetCategoryStats {
    ok:               boolean;
    msg?:             string;
    categoriesValues: CategoriesValue[];
}

export interface CategoriesValue {
    _id:      string;
    total:    number;
    category: Category;
}