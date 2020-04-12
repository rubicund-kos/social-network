const SEND_MESSAGE = "SEND-MESSAGE";




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
        case SEND_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: action.newMessage}]
            };
        }
        default:
            return state;
    }
};

//DialogsPage AC
export const onNewMessageSendActionCreator = (newMessage) => ({type: SEND_MESSAGE, newMessage});

export default dialogsReducer;