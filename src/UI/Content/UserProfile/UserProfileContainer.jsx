import React from "react";
import { connect } from "react-redux";
import { UserProfile } from "./UserProfile";

class UserProfileContainer extends React.Component {
    render() {
        return (
            <>
                <UserProfile />
            </>
        )
    }
}

export default connect(null, null)(UserProfileContainer)