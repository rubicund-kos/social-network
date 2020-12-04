import React from 'react';
import styles from "./../Users.module.sass";
import userImg from "../../../assets/images/user.png";
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, follow, unfollow}) => {
    return (
        <div className={styles.userItem}>
            <div className={styles.userPhotoBlock}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small !== null ? user.photos.small : userImg}
                             className={styles.usersPhoto}
                             alt="User"
                        />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  className={styles.btn}
                                  onClick={() => {unfollow(user.id)}}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  className={styles.btn}
                                  onClick={() => {follow(user.id)}}>Follow</button>
                    }
                </div>
            </div>
            <div className={styles.userDescription}>
                                <span>
                                    FullName: {user.name}
                                </span>
                <span>
                                    Status: {user.status}
                                </span>
                <span>
                                    Country: user.location.country
                                </span>
                <span>
                                    Country: user.location.city
                                </span>
            </div>


        </div>
    )
}

export default User;