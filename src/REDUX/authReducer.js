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
    debugger
    let response = await authAPI.me();
    let {id, email, login} = response.data.data;
    if(response.data.resultCode === 0) {
        dispatch(setAuthData(id, email, login, true));
    }
}

export default authReducer;