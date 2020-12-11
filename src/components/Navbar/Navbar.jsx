import React from 'react';
import s from './Navbar.module.sass';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <i className="fas fa-user"></i>
            <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <i className="fas fa-comments"></i>
            <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <i className="fas fa-rss-square"></i>
            <NavLink to="/articles" activeClassName={s.activeLink}>Articles</NavLink>
        </div>
        <div className={s.item}>
            <i className="fas fa-users"></i>
            <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
        </div>
        <div className={s.item}>
            <i className="fas fa-umbrella"></i>
            <NavLink to="/weather" activeClassName={s.activeLink}>Weather</NavLink>
        </div>
        <div className={s.item}>
            <i className="fas fa-music"></i>
            <a href="/#">Music</a>
        </div>
        <div className={s.item}>
            <i className="fas fa-cog"></i>
            <a href="/#">Settings</a>
        </div>
    </nav>
}

export default Navbar;