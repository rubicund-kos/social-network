import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-Reducer";



const MyPosts = (props) => {
    let postElements = props.posts.map( post =>  <Post id={post.id} message={post.message} likesCount={post.likesCount}/>);

    const newPostElement = React.createRef()

    const onAddPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(onPostChangeActionCreator(text));
    }

    return (
        <div>
            My posts
            <div>
                <div className={style.inputArea}>
                    <textarea ref={newPostElement}
                              onChange={onPostChange}
                              value={props.newPostText}
                              className={style.textarea}
                    />
                    <p className={style.warningMessage}>Ваше сообщение слишком короткое</p>
                </div>
                <button className={style.sendButton} onClick={ onAddPost }>Add post</button>
            </div>
            <div className={style.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;