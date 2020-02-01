import React from 'react';
import {connect} from "react-redux";
import {onNewMessageChangeActionCreator, onNewMessageSendActionCreator} from "../../redux/dialogs-Reducer";
import Dialogs from "./Dialogs";

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