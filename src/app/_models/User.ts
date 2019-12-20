export interface Roles {
    admin?: boolean;
}

export interface User { 
    uid: string;
    email: string;
    roles: Roles;
}