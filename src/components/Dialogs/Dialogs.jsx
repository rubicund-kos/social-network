import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

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

const AddMessageForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea"
                   name="newMessage"
                   placeholder="Enter new message"
            />
            <button>Send</button>
        </form>
    )
};

const AddMessageFormRedux = reduxForm({form: "dialogsAddMessageForm"})(AddMessageForm);

export default Dialogs;