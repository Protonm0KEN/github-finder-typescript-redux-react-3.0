import {combineReducers} from "redux";
import {userReducer} from "./reducers/userReducer";
import {reposReducer} from "./reducers/reposReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    repos: reposReducer,
})
