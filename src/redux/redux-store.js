import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-Reducer";
import dialogsReducer from "./dialogs-Reducer";
import articlesReducer from "./articles-Reducer";
import usersReducer from "./users-Reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    articlesPage: articlesReducer,
    usersPage: usersReducer,

    auth: authReducer
})

let store = createStore(reducers);

window.store = store;

export default store;