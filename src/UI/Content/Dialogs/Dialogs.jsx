import React from "react";
import { Field, reduxForm } from "redux-form";

let AddMessageForm = props => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field name="newMessageBody" component="textarea" placeholder="Enter your message"/>
            <div><button type="submit">Send Message</button></div>
        </form>
    )
}

let AddMessageFormRedux = reduxForm({form: "dialogsAddMessageForm"})(AddMessageForm)

export const Dialogs = () => {
    let onSubmit = values => {
        console.log(values)
    }
    return(
        <>
            Dialogs
            <AddMessageFormRedux onSubmit={onSubmit}/>
        </>
    )
}
