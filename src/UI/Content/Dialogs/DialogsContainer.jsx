import React from "react";
import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import { addMessage } from "../../../REDUX/dialogsReducer";
import user_img from "../../Utils/img/user_img.jpg";
import styles from "./Dialogs.module.scss";
import { Redirect } from "react-router";

class DialogsContainer extends React.Component {
    render() {
        let myMessages = this.props.messages.map(message =>
                <div>
                    <img src={user_img} alt="user_img" className={styles.user_photo}/>
                    <span>{message}</span>
                </div>
            )
        if(!this.props.isAuth) {
            return <Redirect to="/login"/>
        }
        return (
            <>
                <Dialogs addMessage={this.props.addMessage} myMessages={myMessages}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return({
        messages: state.dialogsReducer.messages,
        isAuth: state.authReducer.isAuth,
    })
}
export default connect(mapStateToProps, {addMessage})(DialogsContainer);