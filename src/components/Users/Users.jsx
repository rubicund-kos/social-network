import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from './../../assets/images/user.png'

const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items);
                })
        }
    }




    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {
                props.users.map((user) => (
                    <div key={user.id} className={styles.users}>
                    <span>
                        <div className={styles.imgWrap}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userImg} alt=""/>
                        </div>
                        <div className={styles.buttons}>
                            {user.followed
                                ? <button className={styles.btn} onClick={() => props.follow(user.id)}>Follow</button>
                                : <button className={styles.btn} onClick={() => props.unfollow(user.id)}>Unfollow</button>
                            }
                        </div>
                    </span>
                        <span className={styles.description}>
                        <span>
                            <div className={styles.name}>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'user.location.country'}</div>
                            <div>{'user.location.city'}</div>
                        </span>
                    </span>
                    </div>)
                )}
        </div>
    )
};

export default Users;