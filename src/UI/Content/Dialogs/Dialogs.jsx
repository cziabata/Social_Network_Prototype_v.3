import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../Utils/validators";
import { Textarea } from "../../Utils/formControls/formControls";

let maxLength10 = maxLengthCreator(10)
let AddMessageForm = props => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field name="newMessageBody" 
                   component={Textarea} 
                   placeholder="Enter your message"
                   validate={[required, maxLength10]}/>
            <div><button type="submit">Send Message</button></div>
        </form>
    )
}

let AddMessageFormRedux = reduxForm({form: "dialogsAddMessageForm"})(AddMessageForm)

export const Dialogs = (props) => {
    let onSubmit = values => {
        props.addMessage(values.newMessageBody)
    }
    return(
        <>
            Dialogs
            <AddMessageFormRedux onSubmit={onSubmit}/>
            <div>
                {props.myMessages}
            </div>
        </>
    )
}
