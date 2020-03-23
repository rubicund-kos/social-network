import React from 'react';
import styles from "./Users.module.sass";
import userImg from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

const Users = props => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={styles.usersWrap}>
            <div className={styles.pagesBlock}>
                {pages.map( (page, index) => {
                    return (
                        <span key={index}
                              className={props.currentPage === page ? styles.selectedPage : ""}
                              onClick={() => {props.onPageChanged(page)}}>
                            {page}
                        </span>
                    )
                })}
            </div>
            {props.users.map(user => {

                return (
                    <div key={user.id} className={styles.userItem}>
                        <div className={styles.userPhotoBlock}>
                            <div>
                                <NavLink to={'/profile/' + user.id}>
                                    <img src={user.photos.small != null ? user.photos.small : userImg}
                                         className={styles.usersPhoto}
                                         alt="User"
                                    />
                                </NavLink>
                            </div>
                            <div>
                                {user.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                              className={styles.btn}
                                              onClick={() => {props.unfollow(user.id)}}>Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                              className={styles.btn}
                                              onClick={() => {props.follow(user.id)}}>Follow</button>
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
            })
            }
        </div>
    )
}

export default Users;