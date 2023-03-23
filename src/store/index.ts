import {applyMiddleware, legacy_createStore} from "redux"
import  thunk from "redux-thunk"
import {rootReducer} from "./rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
export const store = legacy_createStore(rootReducer, composeWithDevTools(  applyMiddleware(thunk)))
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch