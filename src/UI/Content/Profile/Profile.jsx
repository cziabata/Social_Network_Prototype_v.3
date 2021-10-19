import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../Utils/formControls/formControls";
import { required, maxLengthCreator } from "../../Utils/validators";
import { ProfileStatus } from "./ProfileStatus";
import { Preloader } from "../../Utils/Preloader";
import { ProfileDataReduxForm } from "./ProfileDataForm";

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

let AddNewPostFormRedux = reduxForm({form: "profileAddNewPostForm"})(AddNewPostForm);



export const Profile = (props) => {
    let [editeMode, setEditeMode] = useState(false);

    let onSubmit = values => {
        props.addPost(values.newPostBody)
    }
    if(!props.myProfile) {
        return <Preloader />
    }
    let onPhotoChange = (event) => {
        if(event.target.files.length) {
            props.updatePhoto(event.target.files[0])
        }
    }
    let saveProfileData = (values) => {
        props.saveProfileData(values).then(()=>setEditeMode(false))
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
                {editeMode 
                    ? <ProfileDataReduxForm initialValues={props.myProfile} onSubmit={saveProfileData} profile={props.myProfile}/> 
                    : <ProfileInfo onPhotoChange={onPhotoChange} myProfile={props.myProfile} setEditeMode={setEditeMode}/> }
            </div> 
            <div>
                {props.myPosts}
            </div>
        </>
    )
}

let ProfileInfo = (props) => {
    return(
        <>
            <img src={props.myProfile.photos.large} alt=" " />
            <input type="file" onChange={props.onPhotoChange}/>
            <div><button onClick={()=>props.setEditeMode(true)}>Edite Profile</button></div>
            <div>
                <b>Looking For A Job: </b>{props.myProfile.lookingForAJob || "No"}
            </div>
            <div>
                <b>Looking For A Job Description: </b>{props.myProfile.lookingForAJobDescription || "No"}
            </div>
            <div>
                <b>Full Name: </b>{props.myProfile.fullName || "No"}
            </div>
            <div>
                <b>About Me: </b>{props.myProfile.aboutMe}
            </div>
            <div>
                <b>Contacts: </b> {Object.keys(props.myProfile.contacts).map( key => {
                    return <Contacts contactTitle={key} contactValue={props.myProfile.contacts[key]}/>
                })}
            </div>

        </>
    )
}
let Contacts = ({contactTitle, contactValue}) => {
    return <div><b> - {contactTitle}: </b> {contactValue}</div>
}