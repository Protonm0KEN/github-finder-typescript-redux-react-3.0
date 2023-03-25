export interface RepoInfo {
    id?: number,
    node_id?:string,
    html_url?:string,
    url?:string,
    stargazers_count?:number,
    created_at?:string,
    name?: string,
}
export interface ReposState {
    repos: RepoInfo[],
    error: null | string,
    loading: boolean
}
export enum ReposActionsTypes {
    FETCH_REPOS = "FETCH_REPOS",
    FETCH_REPOS_SUCCESS = "FETCH_REPOS_SUCCESS",
    FETCH_REPOS_ERROR = "FETCH_REPOS_ERROR"
}
interface FetchReposAction {
    type: ReposActionsTypes.FETCH_REPOS
    payload?: any
}
interface FetchReposSuccessAction {
    type: ReposActionsTypes.FETCH_REPOS_SUCCESS,
    payload: any
}
interface  FetchReposErrorAction {
    type: ReposActionsTypes.FETCH_REPOS_ERROR
    payload: string
}

export type ReposAction = FetchReposAction | FetchReposSuccessAction | FetchReposErrorAction
