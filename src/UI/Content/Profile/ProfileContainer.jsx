import React from "react";
import { Profile } from "../Profile/Profile";
import { connect } from "react-redux";
import { addPost } from "../../../REDUX/profileReducer";
import user_img from "../../Utils/img/user_img.jpg";
import styles from "./ProfileContainer.module.scss";

class ProfileContainer extends React.Component {
    render() {
        let myPosts = this.props.posts.map(post => 
            <div className={styles.user_img}>
                <img src={user_img} alt="user_img"/><span>{post}</span>
            </div>);
        return(
            <>
                <Profile addPost={this.props.addPost} myPosts={myPosts}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        posts: state.profileReducer.posts,
    })
}

export default connect(mapStateToProps, {addPost})(ProfileContainer)