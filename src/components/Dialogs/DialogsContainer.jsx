import React from 'react';
import {onNewMessageChangeActionCreator, onNewMessageSendActionCreator} from "../../redux/dialogs-Reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;