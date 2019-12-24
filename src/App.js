import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Articles from "./components/Articles/Articles";
import {Route} from "react-router-dom";

const App = (props) => {
    debugger;
    return (
        <div>
            <Header/>
            <div className='app-wrapper-content'>
                <Navbar/>
                <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} dispatch={props.dispatch}/> } />
                <Route path='/profile' render={ () => <Profile store={props.store}/> } />
                <Route path='/articles' render={ () => <Articles articlesPage={props.state.articlesPage}/> } />

            </div>
        </div>
    );

}

export default App;