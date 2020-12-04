import React from 'react';
import styles from "./Users.module.sass";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";

const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged,
                   followingInProgress, follow, unfollow, ...props}) => {
    return (
        <div className={styles.usersWrap}>
            <Paginator
                currentPage={currentPage}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                onPageChanged={onPageChanged}
            />
            {props.users.map((user, index) => {

                return (
                    <User
                        key={index}
                        user={user}
                        followingInProgress={followingInProgress}
                        follow={follow}
                        unfollow={unfollow}
                    />
                )
            })
            }
        </div>
    )
}

export default Users;