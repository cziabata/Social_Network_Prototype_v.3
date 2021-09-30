const ADD_MESSAGE = "dialogsReducer/ADD_MESSAGE";

let initialState = {
    messages: ["Message 1"]
}
let dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.newMessage]
            };
        default:
            return state;
    }
}

export let addMessage = (newMessage) => ({type: ADD_MESSAGE, newMessage})

export default dialogsReducer;