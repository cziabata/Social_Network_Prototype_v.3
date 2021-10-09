import React from "react";
import { Route } from "react-router-dom";
import styles from "./Content.module.scss"
import ProfileContainer from "../Content/Profile/ProfileContainer";
import { UserProfileContainer } from "../Content/UserProfile/UserProfileContainer";
import DialogsContainer from "../Content/Dialogs/DialogsContainer";
import UsersContainer from "../Content/Users/UsersContainer";
import LoginContainer from "../Login/LoginContainer";
export const Content = () => {
    return (
        <>
            <div className={styles.content}>
                <Route exact path={"/profile"} render={ () => <ProfileContainer /> }/>
                <Route path={"/profile/:userId"} render={ () => <UserProfileContainer /> }/>
                <Route path={"/users"} render={ () => <UsersContainer /> }/>
                <Route path={"/dialogs"} render={ () => <DialogsContainer /> }/>
                <Route path={"/login"} render={ () => <LoginContainer /> }/>
            </div>
        </>
    )
}