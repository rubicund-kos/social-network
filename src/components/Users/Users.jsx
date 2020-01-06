import React from 'react';
import styles from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, photoUrl: 'http://galerie-pome-turbil.fr/wp-content/uploads/2016/05/hans-silvester4.jpg',
                followed: false, fullName: 'Dmitry', status: 'I am boss', location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2, photoUrl: 'http://galerie-pome-turbil.fr/wp-content/uploads/2016/05/hans-silvester4.jpg',
                followed: true, fullName: 'Kostya', status: 'I am good man', location: {city: 'Kharkiv', country: 'Ukraine'}
            },
            {
                id: 3, photoUrl: 'http://galerie-pome-turbil.fr/wp-content/uploads/2016/05/hans-silvester4.jpg',
                followed: false, fullName: 'Oleg', status: 'I am fine', location: {city: 'Moskov', country: 'Russia'}
            }
        ]);
    }


    return <div>
        {
            props.users.map((user) => (
                <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photoUrl} className={styles.userImg} alt=""/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => props.follow(user.id)}>Follow</button>
                                : <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span>
                    </span>
                </div>)
            )}
    </div>
};

export default Users;