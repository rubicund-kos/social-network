import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return <div className="message">{props.message}</div>
};

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Oleg" id="2"/>
                <DialogItem name="Karl" id="3"/>
                <DialogItem name="Stas" id="4"/>
                <DialogItem name="Igor" id="5"/>
                <DialogItem name="Sergey" id="6"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="Yo"/>
                <Message message="How are you?"/>
                <Message message="Im fine"/>

            </div>
        </div>
    )
};

export default Dialogs;