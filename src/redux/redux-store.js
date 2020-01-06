import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-Reducer";
import dialogsReducer from "./dialogs-Reducer";
import articlesReducer from "./articles-Reducer";
import usersReducer from "./users-Reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    articlesPage: articlesReducer,
    usersPage: usersReducer
})

let store = createStore(reducers);

export default store;