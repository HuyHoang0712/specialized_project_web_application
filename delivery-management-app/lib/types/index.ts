export interface User {
    id: string;
    username: string;
    password: string;
    [key: string]: any;
}

export interface Credential {
    username: string,
    password: string
}