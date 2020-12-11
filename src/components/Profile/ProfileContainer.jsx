import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, savePhoto, updateStatus} from "../../redux/profile-Reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps) {
    //При переходе с чужого профиля на свой, не происходит перерисовки, хотя пропсы(userId) другие,
    //потому что componentDidUpdate, вызывается единожды. Поэтому вызываем этот метод при новых пропсах и рисуем заново.
    if(this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }

  }

  render() {

    return (
       <Profile {...this.props}
                isOwner = {!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto}
       />
    )
  }

}




let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto}),
    withRouter
    // withAuthRedirectComponent
)(ProfileContainer);