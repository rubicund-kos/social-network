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

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export default state;