import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from './../../assets/images/user.png'

class Users extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
              debugger;
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    };

    onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
          .then(response => {
            this.props.setUsers(response.data.items);
          })
    };

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for( let i=1; i <= pagesCount; i++) {
          pages.push(i);
        }

        return (

            <div className={styles.usersPage}>
                <div>
                  {pages.map( page => {
                    return (
                          <span className={this.props.currentPage === page && styles.selectedPage}
                                onClick={(event) => this.onPageChanged(page)}>{page}</span>
                        )
                  })}
                </div>
                <button>Get users</button>
                {
                    this.props.users.map((user) => (
                            <div key={user.id} className={styles.users}>
                                <span>
                                    <div className={styles.imgWrap}>
                                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                             className={styles.userImg} alt=""/>
                                    </div>
                                    <div className={styles.buttons}>
                                        {user.followed
                                            ? <button className={styles.btn}
                                                      onClick={() =>
                                                          this.props.follow(user.id)}>Follow
                                              </button>
                                            : <button className={styles.btn}
                                                      onClick={() =>
                                                          this.props.unfollow(user.id)}>Unfollow
                                              </button>
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
    }
}

export default Users;