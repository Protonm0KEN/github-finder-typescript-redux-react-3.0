import {Dispatch} from "redux";
import axios from "axios";
import {ReposAction, ReposActionsTypes} from "../../types/ReposTypes";

export const getReposInfo = (userName: string): any => {
    return async(dispatch: Dispatch<ReposAction>) => {
        try{
            dispatch({type: ReposActionsTypes.FETCH_REPOS})
            setTimeout(async() => {
                const response = await axios.get(`https://api.github.com/users/${userName}/repos`)
                dispatch({type: ReposActionsTypes.FETCH_REPOS_SUCCESS, payload: response.data})
            }, 1000)
        }catch{
            dispatch({type: ReposActionsTypes.FETCH_REPOS_ERROR, payload: "Произошла ошибка"})
        }
    }
}
