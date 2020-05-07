import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";


const maxLength30 = maxLengthCreator(30);

const AddNewPostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="Textarea"
                   name="newPostText"
                   placeholder="Enter Post Text"
                   validate={[required, maxLength30]}
            />
            <button>Send</button>
        </form>
    )
};

const NewPostFormRedux = reduxForm({form: "newPostForm"})(AddNewPostForm);

const MyPosts = (props) => {
    let postElements = props.posts.map(post =>
        (<Post id={post.id}
               message={post.message}
               likesCount={post.likesCount}
               key={post.id}/>)
    )
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

export default MyPosts;