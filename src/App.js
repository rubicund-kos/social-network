import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";



const App = (props) => {
    return (
        <BrowserRouter>
            <Header/>
            <div className='app-wrapper-content'>
                <Navbar/>
                {/*<Route path='/dialogs' component={Dialogs}/>*/}
                {/*<Route path='/profile' component={Profile}/>*/}
                {/*<Route path='/news' component={News}/>*/}

                <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage}/> }/>
                <Route path='/profile' render={ () => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
                <Route path='/news' render={ () => <News />}/>
            </div>
        </BrowserRouter>
    );

}

export default App;