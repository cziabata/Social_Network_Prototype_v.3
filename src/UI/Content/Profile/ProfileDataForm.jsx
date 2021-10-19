import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input, Textarea } from "../../Utils/formControls/formControls";

const ProfileDataForm = (props) => {
    const {handleSubmit} = props;
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <b>Looking For A Job: </b> <Field name="lookingForAJob" component={Input} type="checkbox"/>
            </div>
            <div>
                <b>Looking For A Job Description: </b><Field name="lookingForAJobDescription" component={Input} />
            </div>
            <div>
                <b>Full Name: </b><Field name="fullName" component={Input} />
            </div>
            <div>
            <b>About me</b>:  <Field placeholder={"About me"} 
                       name={"aboutMe"} 
                       component={Textarea} />
            </div>
            <div>
                <b>Contacts :</b> 
            </div>
            <button type="submit">Save</button>
        </form>
    )
}

export const ProfileDataReduxForm = reduxForm({form: "profile"})(ProfileDataForm)