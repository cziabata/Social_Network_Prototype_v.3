import { usersAPI } from "../API/api";


const SET_USER_PROFILE = "userProfileReducer/SET_USER_PROFILE";

let initialState = {
    userProfile: null
}
let userProfileReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            };
        default:
            return state;
    }
}
let setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile});

export let getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getUserProfile(userId);
    dispatch(setUserProfile(response.data))
}

export default userProfileReducer;