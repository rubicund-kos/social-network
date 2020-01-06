import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import UsersContainer from "./components/Users/UsersContainer";
import ArticlesContainer from "./components/Articles/ArticlesContainer";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <div>
            <Header/>

            <div className='app-wrapper-content'>
                <Navbar/>
                <Route path='/dialogs' render={ () => <DialogsContainer/> } />
                <Route path='/profile' render={ () => <Profile/> } />
                <Route path='/articles' render={ () => <ArticlesContainer/> } />
                <Route path='/users' render={ () => <UsersContainer/> } />


            </div>
        </div>
    );

}

export default App;