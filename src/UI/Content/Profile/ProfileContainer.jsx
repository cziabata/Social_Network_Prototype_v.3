import React from "react";
import { Profile } from "../Profile/Profile";
import { connect } from "react-redux";
import { addPost, updateStatus, setMyProfile, updatePhoto, saveProfileData} from "../../../REDUX/profileReducer";
import user_img from "../../Utils/img/user_img.jpg";
import styles from "./ProfileContainer.module.scss";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.setMyProfile(9786)
    }
    render() {
        let myPosts = this.props.posts.map(post => 
            <div className={styles.user_img}>
                <img src={user_img} alt="user_img"/><span>{post}</span>
            </div>);
        return(
            <>
                <Profile addPost={this.props.addPost} myPosts={myPosts}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                         myProfile={this.props.myProfile}
                         updatePhoto={this.props.updatePhoto}
                         saveProfileData={this.props.saveProfileData}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        posts: state.profileReducer.posts,
        status: state.profileReducer.status,
        myId: state.authReducer.id,
        myProfile: state.profileReducer.profile,
    })
}
export default connect(mapStateToProps, {addPost, updateStatus, setMyProfile, updatePhoto, saveProfileData})(ProfileContainer)