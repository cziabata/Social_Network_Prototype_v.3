import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../Utils/formControls/formControls";
import { required, maxLengthCreator } from "../../Utils/validators";

let maxLength10 = maxLengthCreator(10);
let AddNewPostForm = props => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field name="newPostBody"
                   component={Textarea} 
                   placeholder="Enter your message"
                   validate={[required, maxLength10]}/>
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