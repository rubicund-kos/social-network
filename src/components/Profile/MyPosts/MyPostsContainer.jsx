import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-Reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(onPostChangeActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
};

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;