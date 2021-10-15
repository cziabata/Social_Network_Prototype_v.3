import React from "react";
import user_photo from "../../Utils/img/user_img.jpg";
import { Preloader } from "../../Utils/Preloader";
export const UserProfile = (props) => {
    if(!props.userProfile) {
        return <Preloader />
    }
    return (
        <>
            <div>
                <img src={props.userProfile.photos.large || user_photo} alt="user ava"/><span>User id: {props.userProfile.userId}</span>
            </div>
            <div>
                Looking For A Job: {props.userProfile.lookingForAJob || "No"}
            </div>
            <div>
                Looking For A Job Description: {props.userProfile.lookingForAJobDescription || "No"}
            </div>
            <div>
                Full Name: {props.userProfile.fullName || "No"}
            </div>
            <div>
                <div>Contacts:</div>
                <div> - GitHub: {props.userProfile.contacts.github || "Empty"}</div>
                <div> - VK: {props.userProfile.contacts.vk || "Empty"}</div>
                <div> - Facebook: {props.userProfile.contacts.facebook || "Empty"}</div>
                <div> - Instagram: {props.userProfile.contacts.instagram || "Empty"}</div>
                <div> - Twitter: {props.userProfile.contacts.twitter || "Empty"}</div>
            </div>
        </>
    )
}