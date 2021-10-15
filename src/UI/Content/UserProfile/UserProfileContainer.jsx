import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { UserProfile } from "./UserProfile";
import { getUserProfile } from "../../../REDUX/userProfileReducer";

class UserProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId)
    }
    render() {
        return (
            <>
                <UserProfile userProfile={this.props.userProfile}/>
            </>
        )
    }
}

let mapStateToProps = (state) => ({
    userProfile: state.userProfileReducer.userProfile,
})

let withUrlDataUserProfileContainer = withRouter(UserProfileContainer)
export default connect(mapStateToProps, {getUserProfile})(withUrlDataUserProfileContainer)