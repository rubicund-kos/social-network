import {connect} from "react-redux";
import {allArticleAC, kastanedaArticleAC, oshoArticleAC} from "../../redux/articles-Reducer";
import Articles from "./Articles";

let mapStateToProps = (state) => {
    return {
        articlesPage: state.articlesPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        clickShowAllArticles: () => {
            dispatch(allArticleAC())
        },
        clickShowKastanedaArticles: () => {
            dispatch(kastanedaArticleAC());
        },
        clickShowOshoArticles: () => {
            dispatch(oshoArticleAC())
        }
    }
};

const ArticlesContainer = connect(mapStateToProps, mapDispatchToProps)(Articles);

export default ArticlesContainer;