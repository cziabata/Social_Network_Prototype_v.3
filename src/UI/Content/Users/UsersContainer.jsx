import React from "react";
import { Users } from "../Users/Users";
import { getUsers, onPageChanged } from "../../../REDUX/usersReducer";
import { connect } from "react-redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }
    onPageChanged = (pageNumber) => {
        this.props.onPageChanged(this.props.pageSize, pageNumber)
    }
    render(){
        let users = this.props.users.map( user => <div id={user.id}>
            <div>{user.name}</div>
        </div> )
        return(
            <>
                <Users users={users} totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       onPageChanged={this.onPageChanged}
                       portionSize={this.props.portionSize}/>
            </>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        pageSize: state.usersReducer.pageSize,
        currentPage: state.usersReducer.currentPage,
        users: state.usersReducer.users,
        totalUsersCount: state.usersReducer.totalUsersCount,
        portionSize: state.usersReducer.portionSize,
    }
}
export default connect(mapStateToProps, {getUsers, onPageChanged})(UsersContainer)