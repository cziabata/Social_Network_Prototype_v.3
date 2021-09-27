import React from "react";
import { Field, reduxForm } from "redux-form";

let AddNewPostForm = props => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field name="newPostBody" component="textarea" placeholder="Enter your message"/>
            <div>
                <button>Send Message</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: "profileAddNewPostForm"})(AddNewPostForm)

export const Profile = () => {
    let onSubmit = values => {
        console.log(values)
    }
    return (
        <>
            <div>
                ava + description
            </div>
            <div>
                My Posts
            </div>
            <div>
                <AddNewPostFormRedux onSubmit={onSubmit} />
            </div>
            <div>
                <img src={""} alt={"user"} />
                <span>Post Message</span>
            </div>
        </>
    )
}