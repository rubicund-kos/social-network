import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-Reducer";
import dialogsReducer from "./dialogs-Reducer";
import articlesReducer from "./articles-Reducer";
import usersReducer from "./users-Reducer";
import authReducer from "./auth-Reducer";
import appReducer from "./app-Reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    articlesPage: articlesReducer,
    usersPage: usersReducer,
    app: appReducer,

    auth: authReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;