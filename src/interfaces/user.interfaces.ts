export interface ResponseGetCurrentUser {
    ok:   boolean;
    user: User;
    membership: Membership;
}

export interface User {
    uid:          string;
    name:         string;
    email:        string;
    role:         string;
    isSubscribed: boolean;
}

export interface Membership {
    _id: string;
    user: User;
    planId: string;
    status: 'active' | 'canceled' | 'past_due' | 'unpaid';
}