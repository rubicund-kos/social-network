import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";



const MyPosts = (props) => {
    let postElements = props.posts.map( post =>  <Post id={post.id}
                                                       message={post.message}
                                                       likesCount={post.likesCount}
                                                       key={post.id}
    />);

    const onAddPost = (values) => {
        props.addPost(values.newPostText);
    };
    return (
        <div>
            My posts
            <NewPostFormRedux onSubmit={onAddPost}/>
            <div className={style.posts}>
                {postElements}
            </div>
        </div>
    )
}

const NewPostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="Textarea"
                   name="newPostText"
                   placeholder="Enter Post Text"
            />
            <button>Send</button>
        </form>
    )
};
const NewPostFormRedux = reduxForm({form: "newPostForm"})(NewPostForm);

export default MyPosts;