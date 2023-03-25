import {ReposAction, ReposActionsTypes, ReposState} from "../../types/ReposTypes";

const initialState: ReposState = {
    error: null,
    loading: false,
    repos: []
}
export const reposReducer = (state = initialState, action: ReposAction) : ReposState => {
    switch(action.type){
        case ReposActionsTypes.FETCH_REPOS:
            return {loading: true, error: null, repos: []}
        case ReposActionsTypes.FETCH_REPOS_SUCCESS:
            return {loading: false, error: null, repos: action.payload}
        case ReposActionsTypes.FETCH_REPOS_ERROR:
            return {
                loading: false,
                error: action.payload,
                repos : []
            }
        default:
            return state
    }
}
