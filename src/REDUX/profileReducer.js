const ADD_POST = "profileReducer/ADD_POST";

let initialState = {
    posts: ["Post 1"],
}
let profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {...state, posts: [...state.posts, action.newPostBody]}
        default:
            return state
    }
}

export let addPost = (newPostBody) => ({type: ADD_POST, newPostBody})

export default profileReducer;