export interface User {
    id: number,
    login: string,
    password: string,
    lists: number[],
    type: string,
}