export interface UserInfo {
    id?: number
    avatar_url?: string
    url?: string
    html_url?:string
    starred_url?:string
    repos_url?:string
    name?:string
    email?: string | null
    location? : string
    bio?: string
    public_repos?:number
    public_gists?:number
    followers?:number
    created_at?:string,
    following?:number
}
export interface UserState {
    user: UserInfo,
    error: null | string,
    loading: boolean
}
export enum UserActionsTypes {
    FETCH_USER = "FETCH_USER",
    FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
    FETCH_USER_ERROR = "FETCH_USER_ERROR"
}
interface FetchUserAction {
    type: UserActionsTypes.FETCH_USER
    payload?: any
}
interface FetchUserSuccessAction {
    type: UserActionsTypes.FETCH_USER_SUCCESS,
    payload: any
}
interface  FetchUserErrorAction {
    type: UserActionsTypes.FETCH_USER_ERROR
    payload: string
}

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction