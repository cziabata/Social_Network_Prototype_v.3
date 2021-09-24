import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import {form as formReducer} from "redux-form";
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import userProfileReducer from "./userProfileReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    authReducer,
    dialogsReducer,
    profileReducer,
    userProfileReducer,
    usersReducer,
    form: formReducer,
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware))
