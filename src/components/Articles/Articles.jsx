import React from 'react';
import ArticleItem from "./ArticleItem/ArticleItem";
import styles from './Articles.module.css'


const Articles = (props) => {
    const showAllArticles = () => {
      props.clickShowAllArticles()
    };

    const showKastanedaArticles = () => {
      props.clickShowKastanedaArticles();
    };

    const showOshoArticles = () => {
      props.clickShowOshoArticles()
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
            <div className={styles.topLine}>
                <button className={styles.articleBtn} onClick={showAllArticles}>Все статьи</button>
                <button className={styles.articleBtn} onClick={showKastanedaArticles}>Кастанеда</button>
                <button className={styles.articleBtn} onClick={showOshoArticles}>Ошо</button>
            </div>
            <div>
                {articleItems}
            </div>

        </div>
    )
};

export default Articles;