let profileReducer = (action, state) => {
    switch(action.type) {
        case 1:
            return {state}
        default:
            return state
    }
}

export default profileReducer;