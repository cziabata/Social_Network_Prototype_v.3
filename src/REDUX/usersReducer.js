import { usersAPI } from "../API/api";

const SET_USERS = "usersReducer/SET_USERS";
const SET_TOTAL_USERS_COUNT = "usersreducer/SET_TOTAL_USERS_COUNT";

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
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
        default:
            return state;
    }
}

let setUsers = (users) => ({type: SET_USERS, users});
let setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})

export const getUsers = (pageSize, currentPage) => async (dispatch) => {
    let data = await usersAPI.getUsers(pageSize, currentPage);
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount))
}

export default usersReducer;