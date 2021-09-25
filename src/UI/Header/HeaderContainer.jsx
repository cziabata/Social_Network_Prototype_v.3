import React from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import { getAuthData } from "../../REDUX/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthData();
    }
    render() {
        return(
            <>
                <Header login={this.props.login}
                        isAuth={this.props.isAuth}/>
            </>
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login,
})

export default connect(mapStateToProps, {getAuthData})(HeaderContainer);