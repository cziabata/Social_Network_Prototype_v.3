import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import userProfileReducer from "./userProfileReducer";
import usersReducer from "./usersReducer";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    authReducer,
    dialogsReducer,
    profileReducer,
    userProfileReducer,
    usersReducer,
    form: formReducer
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
