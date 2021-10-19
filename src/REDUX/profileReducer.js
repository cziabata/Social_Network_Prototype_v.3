import { profileAPI } from "../API/api";

const ADD_POST = "profileReducer/ADD_POST";
const SET_STATUS = "profileReducer/SET_STATUS";
const SET_PROFILE = "profileReducer/SET_PROFILE";
const UPDATE_PHOTO = "profileReducer/UPDATE_PHOTO";

let initialState = {
    posts: ["Post 1"],
    status: "",
    profile: null,
}
let profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {...state, posts: [...state.posts, action.newPostBody]}
        case SET_STATUS:
            return {...state, status: action.status}
        case SET_PROFILE: 
            return {...state, profile: action.profile}
        case UPDATE_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state
    }
}

export let addPost = (newPostBody) => ({type: ADD_POST, newPostBody});
let setStatus = (status) => ({type: SET_STATUS, status});
let setProfile = (profile) => ({type: SET_PROFILE, profile});
let updatePhotoSucces = (photos) => ({type: UPDATE_PHOTO, photos})

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if(response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const setMyProfile = (id) => async (dispatch) => {
    let response = await profileAPI.getMyProfile(id);
    dispatch(setProfile(response.data))
}
export const updatePhoto = (photo) => async (dispatch) => {
    let response = await profileAPI.updatePhoto(photo);
    if(response.resultCode ===0) {
        dispatch(updatePhotoSucces(response.data.data.photos))
    }
}
export const saveProfileData = (profile) => async (dispatch, getState) => {
    let myId = getState().authReducer.id
    await profileAPI.saveProfileData(profile);
    dispatch(setMyProfile(myId))
}

export default profileReducer;