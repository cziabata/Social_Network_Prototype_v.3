import { stopSubmit } from "redux-form";
import { authAPI } from "../API/api";

const SET_AUTH_DATA = "authReducer/SET_AUTH_DATA";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

let authReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
}

let setAuthData = (id, email, login, isAuth) => ({type: SET_AUTH_DATA, data: {id, email, login, isAuth}});

export const getAuthData = () => async (dispatch) => {
    let response = await authAPI.me();
    let {id, email, login} = response.data.data;
    if(response.data.resultCode === 0) {
        dispatch(setAuthData(id, email, login, true));
    }
}
export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    if(response.data.resultCode === 0) {
        dispatch(getAuthData());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}))
    }
}
export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    if(response.data.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false));
    }
}

export default authReducer;