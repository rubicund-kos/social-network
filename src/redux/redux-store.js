import {applyMiddleware, combineReducers, createStore, compose} from "redux";
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

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;