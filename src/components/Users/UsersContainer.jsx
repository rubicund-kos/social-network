import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    unfollow,
    setCurrentPage,
    toggleFolowingProgress,
    requestUsers
} from "../../redux/users-Reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        let {currentPage, pagSize} = this.props;
        this.props.getUsers(currentPage, pagSize);
    }

    onPageChanged = (pageNumber) => {
        let {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                //callbacks
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}

            />}

        </>
    }
}

let mapStateToProps = (state) => {
    return {
            users: getUsers(state),
            pageSize: getPageSize(state),
            totalUsersCount: getTotalUsersCount(state),
            currentPage: getCurrentPage(state),
            isFetching: getIsFetching(state),
            followingInProgress: getFollowingInProgress(state)
        }
};

export default compose(
    connect(mapStateToProps,
    {follow, unfollow, setCurrentPage, toggleFolowingProgress, getUsers: requestUsers})
)(UsersContainer)

// let AuthRedirectComponent = withAuthRedirectComponent(UsersContainer);


