import React from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import { getAuthData, logout } from "../../REDUX/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthData();
    }
    render() {
        return(
            <>
                <Header login={this.props.login}
                        isAuth={this.props.isAuth}
                        logout={this.props.logout}/>
            </>
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login,
})

export default connect(mapStateToProps, {getAuthData, logout})(HeaderContainer);