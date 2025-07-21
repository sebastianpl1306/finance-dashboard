export interface ResponseGetCurrentUser {
    ok:   boolean;
    user: User;
}

export interface User {
    uid:          string;
    name:         string;
    email:        string;
    role:         string;
    isSubscribed: boolean;
}
