import { profileAPI } from "../API/api";

const ADD_POST = "profileReducer/ADD_POST";
const SET_STATUS = "profileReducer/SET_STATUS";

let initialState = {
    posts: ["Post 1"],
    status: "",
}
let profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {...state, posts: [...state.posts, action.newPostBody]}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}

export let addPost = (newPostBody) => ({type: ADD_POST, newPostBody});
let setStatus = (status) => ({type: SET_STATUS, status});

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if(response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export default profileReducer;