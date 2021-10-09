import React from "react";
import { Users } from "../Users/Users";
import { getUsers } from "../../../REDUX/usersReducer";
import { connect } from "react-redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }
    render(){
        let users = this.props.users.map( user => <div id={user.id}>
            <div>{user.name}</div>
        </div> )
        return(
            <>
                <Users users={users} />
            </>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        pageSize: state.usersReducer.pageSize,
        currentPage: state.usersReducer.currentPage,
        users: state.usersReducer.users,
    }
}
export default connect(mapStateToProps, {getUsers})(UsersContainer)