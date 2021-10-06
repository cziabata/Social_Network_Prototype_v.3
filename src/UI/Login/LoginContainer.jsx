import React from "react";
import { connect } from "react-redux";
import { login } from "../../REDUX/authReducer";
import { Login } from "./Login";

class LoginContainer extends React.Component {
    render() {
        return (
            <>
                <Login login={this.props.login}
                       isAuth={this.props.isAuth}/>
            </>
        )
    }
}
let mapStateToProps = (state) => {
    return{
        isAuth: state.authReducer.isAuth,
    }
}
export default connect(mapStateToProps, {login})(LoginContainer)