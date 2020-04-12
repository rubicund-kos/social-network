import React from 'react';

class DialogsForm extends React.Component {
    onSendMessageClick = () => {
        this.props.clickSendMessage();
    };

    onMessageEdit = (event) => {
        let text = event.target.value;
        this.props.textMessageEdit(text);
    };
    render() {
        return (
            <div>
                <textarea onChange={this.onMessageEdit} value={this.props.dialogsPage.newMessage}></textarea>
                <button onClick={this.onSendMessageClick}>Send</button>
            </div>
        )
    }
}

export default DialogsForm;