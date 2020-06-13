import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {AddMessageFormRedux} from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map( dialog => <DialogItem name={dialog.name}
                                                                               id={dialog.id}
                                                                               key={dialog.id}
    /> );
    let messagesElements = props.dialogsPage.messages.map( msg => <Message message={msg.message}
                                                                           key={msg.id}
    />);

    const addNewMessage = (values) => {
        props.clickSendMessage(values.newMessage);
    }

    if (!props.isAuth) {
        return <Redirect to='/login' />
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
};


export default Dialogs;