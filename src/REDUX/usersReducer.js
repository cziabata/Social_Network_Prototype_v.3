import { usersAPI } from "../API/api";

const SET_USERS = "usersReducer/SET_USERS";
const SET_TOTAL_USERS_COUNT = "usersReducer/SET_TOTAL_USERS_COUNT";
const SET_CURRENT_PAGE = "usersReducer/SET_CURRENT_PAGE";

let initialState = {
    users: [],
    pageSize: 20,
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
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        default:
            return state;
    }
}

let setUsers = (users) => ({type: SET_USERS, users});
let setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
let setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});

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

export default usersReducer;