export interface ResponseGetCategory {
    ok:         boolean;
    msg?:       string;
    categories: Category[];
}

export interface Category {
    _id:         string;
    name:        string;
    description: string;
    user:        string;
    createdAt:   Date;
    updatedAt:   Date;
    __v:         number;
}