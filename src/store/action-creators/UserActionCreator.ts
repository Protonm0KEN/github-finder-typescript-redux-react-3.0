import {Dispatch} from "redux";
import {UserAction, UserActionsTypes} from "../../types/UserTypes";
import axios from "axios";

export const getUserInfo = (userName: string): any => {
    return async(dispatch: Dispatch<UserAction>) => {
        try{
            dispatch({type: UserActionsTypes.FETCH_USER})
            setTimeout(async() => {
                const response = await axios.get(`https://api.github.com/users/${userName}`)
                dispatch({type: UserActionsTypes.FETCH_USER_SUCCESS, payload: response.data})
            }, 1000)
        }catch{
            dispatch({type: UserActionsTypes.FETCH_USER, payload: "Произошла ошибка"})
        }
    }
}