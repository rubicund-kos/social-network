import React from 'react';
import ArticleItem from "./ArticleItem/ArticleItem";
import {connect} from "react-redux";


const Articles = (props) => {
    const showAllArticles = () => {

    }

    let articleItems = props.articlesPage.articles.map(article => (


        <ArticleItem id={article.id}
                     article={article.article}
                     author={article.author}
                     likesCount={article.likesCount}
                     comments={article.comments}
                     key={article.id}/>))
    return (
        <div>
            <div>
                <button onClick={showAllArticles}>Все статьи</button>
                <button>Кастанеда</button>
                <button>Ошо</button>
            </div>
            <div>

                {articleItems}
            </div>

        </div>
    )
};

export default Articles;