import { usersAPI } from "../API/api";

const SET_USERS = "usersReducer/SET_USERS";
const SET_TOTAL_USERS_COUNT = "usersReducer/SET_TOTAL_USERS_COUNT";
const SET_CURRENT_PAGE = "usersReducer/SET_CURRENT_PAGE";
const FOLLOW = "usersReducer/FOLLOW";
const UNFOLLOW = "usersReducer/UNFOLLOW";
const SET_FOLLOWING_IN_PROGRESS = "usersReducer/SET_FOLLOWING_IN_PROGRESS";

let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    portionSize: 20,
    followingInProgress: [],
}

let usersReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if(user.id === action.id) {
                        return { ...user, followed: true}
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if(user.id === action.id) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        case SET_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching 
                                     ? [...state.followingInProgress, action.id]
                                     : state.followingInProgress.filter( id => id !== action.id)
            }
        default:
            return state;
    }
}

let setUsers = (users) => ({type: SET_USERS, users});
let setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
let setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
let followUser = (id) => ({type: FOLLOW, id});
let unfollowUser = (id) => ({type: UNFOLLOW, id});
let setFollowingInProgress = (isFetching, id) => ({type: SET_FOLLOWING_IN_PROGRESS, isFetching, id})

export const getUsers = (pageSize, currentPage) => async (dispatch) => {
    let data = await usersAPI.getUsers(pageSize, currentPage);
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount))
}
export const onPageChanged = (pageSize, page) => async (dispatch) => {
    dispatch(setCurrentPage(page));
    let data = await usersAPI.getUsers(pageSize, page);
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}
export const follow = (id) => async (dispatch) => {
    dispatch(setFollowingInProgress(true, id))
    let response = await usersAPI.follow(id);
    if(response.data.resultCode === 0) {
        dispatch(followUser(id));
    }
    dispatch(setFollowingInProgress(false, id))
}
export const unfollow = (id) => async (dispatch) => {
    dispatch(setFollowingInProgress(true, id))
    let response = await usersAPI.unfollow(id);
    if(response.data.resultCode === 0) {
        dispatch(unfollowUser(id));
    }
    dispatch(setFollowingInProgress(false, id))
}

export default usersReducer;