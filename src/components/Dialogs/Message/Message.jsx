import React from 'react';
import style from './../Dialogs.module.css';


const Message = (props) => {
    return <div className={style.message}><p>{props.message}</p></div>
};


export default Message;