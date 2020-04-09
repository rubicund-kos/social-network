import React from 'react';
import {connect} from "react-redux";
import {onNewMessageChangeActionCreator, onNewMessageSendActionCreator} from "../../redux/dialogs-Reducer";
import Dialogs from "./Dialogs";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        clickSendMessage: () => {
            dispatch(onNewMessageSendActionCreator())
        },
        textMessageEdit: (text) => {
            dispatch(onNewMessageChangeActionCreator(text))
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirectComponent
)(Dialogs);