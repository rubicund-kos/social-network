import React from 'react';
import './App.sass';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import ArticlesContainer from "./components/Articles/ArticlesContainer";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import WeatherContainer from "./components/Weather/WeatherContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Clock from "./components/Clock/Clock";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-Reducer";
import Preloader from "./components/common/Preloader/Preloader";

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
                                   render={() => <DialogsContainer/>}/>
                            <Route path='/profile/:userId?'
                                   render={() => <ProfileContainer/>}/>
                            <Route path='/articles'
                                   render={() => <ArticlesContainer/>}/>
                            <Route path='/weather'
                                   render={() => <WeatherContainer/>}/>
                            <Route path='/users'
                                   render={() => <UsersContainer/>}/>
                            <Route path='/login'
                                   render={() => <Login/>}/>
                            <Route path='/clock'
                                   render={() => <Clock/>}/>


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