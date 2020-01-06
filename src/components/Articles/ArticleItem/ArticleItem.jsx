import React from 'react';

const ArticleItem = (props) => {
    return (
        <div>
            <p>{props.article}</p>
            <p><strong>{props.author}</strong></p>
            <textarea></textarea>
            <button>Send comment</button>
        </div>
    )
}

export default ArticleItem;