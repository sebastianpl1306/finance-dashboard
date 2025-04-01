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
    color:       string;
    createdAt:   Date;
    updatedAt:   Date;
    __v:         number;
}