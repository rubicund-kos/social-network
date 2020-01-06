import React from 'react';
import {connect} from "react-redux";
import Articles from "./Articles";

const mapStateToProps = (state) => {
    return {
        articlesPage: state.articlesPage
    }
};

const mapDispatchToProps = () => {

};

const ArticlesContainer = connect(mapStateToProps, mapDispatchToProps)(Articles);

export default ArticlesContainer;