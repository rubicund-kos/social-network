import React from 'react';
import styles from "../Articles.module.css";

const ArticleItem = (props) => {
    return (
        <div className={styles.article}>
            <p>{props.article}</p>
            <p><strong>{props.author}</strong></p>
            <textarea className={styles.commentTextarea}></textarea>
            <button className={styles.commentBtn}>Send comment</button>
        </div>
    )
}

export default ArticleItem;