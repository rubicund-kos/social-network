import profileReducer, {addPostActionCreator} from "./profile-Reducer";
import ReactDOM from "react-dom";
import App from "../App";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: '0'},
        {id: 2, message: 'It\'s my first post', likesCount: '23'},
        {id: 3, message: 'That\'s great', likesCount: '2'},
        {id: 4, message: 'Yes, I like this', likesCount: '12'}
    ],
    profile: null,
    status: ''
};


it('length of post should be increment', () => {
    let state = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: '0'},
            {id: 2, message: 'It\'s my first post', likesCount: '23'},
            {id: 3, message: 'That\'s great', likesCount: '2'},
            {id: 4, message: 'Yes, I like this', likesCount: '12'}
        ]
    };
    let action = addPostActionCreator("bla-bla-bla")
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5)
    expect(newState.posts[4].message).toBe("bla-bla-bla")
});