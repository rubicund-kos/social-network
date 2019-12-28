const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";


//DialogsPage AC
export const onNewMessageChangeActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text});
export const onNewMessageSendActionCreator = () => ({type: SEND_MESSAGE});

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'Im fine'}
    ],
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Alex'},
        {id: 5, name: 'Stas'},
        {id: 6, name: 'Oleg'},
    ],
    newMessage: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessage: action.newMessage};
        }
        case SEND_MESSAGE: {
            let newMessage = state.newMessage;
            return {
                ...state,
                newMessage: '',
                messages: [...state.messages, {id: 5, message: newMessage}]
            };
        }
        default:
            return state;
    }
};

export default dialogsReducer;