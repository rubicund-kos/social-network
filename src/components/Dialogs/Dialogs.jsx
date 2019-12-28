import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map( dialog => <DialogItem name={dialog.name}
                                                                               id={dialog.id}
                                                                               key={dialog.id}
    /> );
    let messagesElements = props.dialogsPage.messages.map( msg => <Message message={msg.message}
                                                                           key={msg.id}
    />);

    const onSendMessageClick = () => {
        props.clickSendMessage();
    };

    const onMessageEdit = (event) => {
        let text = event.target.value;
        props.textMessageEdit(text);
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
                <textarea onChange={onMessageEdit} value={props.dialogsPage.newMessage}></textarea>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
    )
};



export default Dialogs;