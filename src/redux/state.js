import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: '0'},
            {id: 2, message: 'It\'s my first post', likesCount: '23' },
            {id: 3, message: 'That\'s great', likesCount: '2' },
            {id: 4, message: 'Yes, I like this', likesCount: '12' }
        ],
        newPostText: ''
    },
    dialogsPage: {
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
        ]
    }

};

window.state = state;

// the funcion to add a new message
export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    prohibitSending();
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};
// Function prohibits sending message if it is too short
const prohibitSending = () => {
    if (state.profilePage.newPostText.length < 3) {
        alert('Message is too short');
    }
}

// the function updates the state when the field changes
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export default state;