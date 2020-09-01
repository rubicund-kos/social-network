import React from 'react';
import style from './Post.module.css';
import like from './../../../../img/like_PNG71.png';

const Post = (props) => {

    return (
        <div className={style.item}>
            <div className={style.imgWrapper}>
                <img className={style.avatarImg} alt='avatar'
                     src='http://lurkmore.so/images/thumb/7/78/%D0%9C%D0%B8%D1%81%D1%82%D0%B5%D1%80_%D0%91%D0%B8%D0%BD.jpg/180px-%D0%9C%D0%B8%D1%81%D1%82%D0%B5%D1%80_%D0%91%D0%B8%D0%BD.jpg'/>
            </div>


            <div className={style.message}>
                <p className={style.text}>{props.message}</p>
                <a href="#up"><img className={style.likeImg} src={like} alt="Like"/></a>
                <span className={style.likesCount}>{props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;