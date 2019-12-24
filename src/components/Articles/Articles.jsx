import React from 'react';
import ArticleItem from "./ArticleItem/ArticleItem";

const Articles = (props) => {
    let articleItems = props.articlesPage.articles.map(article => <ArticleItem id={article.id}
                                                                               article={article.article}
                                                                               author={article.author}
                                                                               likesCount={article.likesCount}
                                                                               comments={article.comments}
    />)

    return (
        <div>
            <div>
                <button>Все статьи</button>
                <button>Кастанеда</button>
                <button>Ошо</button>
            </div>
            <div>

                {articleItems}
            </div>

        </div>
    )
}

export default Articles;