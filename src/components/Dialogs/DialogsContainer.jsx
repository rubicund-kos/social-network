import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {onNewMessageChangeActionCreator, onNewMessageSendActionCreator} from "../../redux/dialogs-Reducer";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/> );
    let messagesElements = props.state.messages.map( msg => <Message message={msg.message}/>);

    const onSendMessageClick = () => {
        props.dispatch(onNewMessageSendActionCreator());
    };

    const onMessageEdit = (event) => {
        let text = event.target.value;
        props.dispatch(onNewMessageChangeActionCreator(text));
    };

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea onChange={onMessageEdit} value={props.state.newMessage}></textarea>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
    )
};

export default Dialogs;