import React from 'react';

const ArticleItem = (props) => {
    return (
        <div>
            <p>{props.article}</p>
            <p><strong>{props.author}</strong></p>
            <p></p>
        </div>
    )
}

export default ArticleItem;