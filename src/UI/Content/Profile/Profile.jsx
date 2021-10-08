import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../Utils/formControls/formControls";
import { required, maxLengthCreator } from "../../Utils/validators";
import { ProfileStatus } from "./ProfileStatus";

let maxLength10 = maxLengthCreator(10);
let AddNewPostForm = props => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field name="newPostBody"
                   component={Textarea} 
                   placeholder="Enter your message"
                   validate={[required, maxLength10]}/>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: "profileAddNewPostForm"})(AddNewPostForm)

export const Profile = (props) => {
    let onSubmit = values => {
        props.addPost(values.newPostBody)
    }
    return (
        <>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            <div>
                My Posts
            </div>
            <div>
                <AddNewPostFormRedux onSubmit={onSubmit} />
            </div>
            <div>
                {props.myPosts}
            </div>
        </>
    )
}