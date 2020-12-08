import React from 'react';
import './App.sass';
import Navbar from './components/Navbar/Navbar';
import {Route, withRouter} from "react-router-dom";

import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-Reducer";
import Preloader from "./components/common/Preloader/Preloader";
import withSuspense from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const ArticlesContainer = React.lazy(() => import('./components/Articles/ArticlesContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return (
                <div>
                    <HeaderContainer/>
                    <div className='app-wrapper-content'>
                        <Navbar/>
                        <Route path='/dialogs'
                               render={withSuspense(DialogsContainer)}
                        />
                        <Route path='/profile/:userId?'
                               render={withSuspense(ProfileContainer)}/>
                        <Route path='/articles'
                               render={withSuspense(ArticlesContainer)}/>
                        <Route path='/users'
                               render={withSuspense(UsersContainer)}/>
                        <Route path='/login'
                               render={withSuspense(Login)}/>


                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);