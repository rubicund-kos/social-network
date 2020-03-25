import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-Reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
        userId = 2;
    }
    this.props.getProfile(userId);
  }

  render() {

    return (
       <Profile {...this.props} profile={this.props.profile}/>
    )
  }

}




let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

let AuthRedirectComponent = withAuthRedirectComponent(ProfileContainer);
let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getProfile})(withUrlDataContainerComponent);