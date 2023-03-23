import {UserAction, UserActionsTypes, UserState} from "../../types/UserTypes";

const initialState: UserState = {
    user: {},
    error: null,
    loading: false
}
export const userReducer = (state = initialState, action: UserAction) : UserState => {
    switch(action.type){
        case UserActionsTypes.FETCH_USER:
            return {loading: true, error: null, user: {}}
        case UserActionsTypes.FETCH_USER_SUCCESS:
            return {loading: false, error: null, user: action.payload}
        case UserActionsTypes.FETCH_USER_ERROR:
            return {
                loading: false,
                error: action.payload,
                user : {}
            }
        default:
            return state
    }
}