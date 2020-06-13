import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormControls/FormControls";
import React from "react";

const maxLength50 = maxLengthCreator(50);
const AddMessageForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   validate={[required, maxLength50]}
                   name="newMessage"
                   placeholder="Enter new message"
            />
            <button>Send</button>
        </form>
    )
};

export const AddMessageFormRedux = reduxForm({form: "dialogsAddMessageForm"})(AddMessageForm);