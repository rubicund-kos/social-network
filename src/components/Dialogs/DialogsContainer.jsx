import React from 'react';
import {connect} from "react-redux";
import {onNewMessageChangeActionCreator, onNewMessageSendActionCreator} from "../../redux/dialogs-Reducer";
import Dialogs from "./Dialogs";
import {Redirect} from "react-router-dom";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";

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

let AuthRedirectComponent = withAuthRedirectComponent(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;