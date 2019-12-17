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
                <ul>
                    <li>Все статьи</li>
                    <li>Карлос Кастанеда</li>
                    <li>Ошо</li>
                </ul>
            </div>
            <div>
                {articleItems}
            </div>

        </div>
    )
}

export default Articles;