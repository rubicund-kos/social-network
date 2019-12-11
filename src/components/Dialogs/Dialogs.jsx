import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/> );

    let messagesElements = props.state.messages.map( msg => <Message message={msg.message}/>);

    const newMessage = React.createRef()

    const onNewMessageSend = () => {
        let text = newMessage.current.value;
        alert(text);
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
                <textarea ref={newMessage}></textarea>
                <button onClick={onNewMessageSend}>Send</button>
            </div>
        </div>
    )
};

export default Dialogs;