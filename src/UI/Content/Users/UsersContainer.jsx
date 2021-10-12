import React from "react";
import { Users } from "../Users/Users";
import { getUsers, onPageChanged } from "../../../REDUX/usersReducer";
import { connect } from "react-redux";
import user_photo from "../../Utils/img/user_img.jpg";
import styles from './Users.module.scss';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }
    onPageChanged = (pageNumber) => {
        this.props.onPageChanged(this.props.pageSize, pageNumber)
    }
    render(){
        let users = this.props.users.map( user => <div id={user.id} className={styles.user}>
            <div>
                <img src={user.photos.large || user_photo} alt="user_photo" className={styles.user_photo}/>
                <span>User id: </span>{user.id}
            </div>
            <div>{user.name}</div>
            <div><span>User status: </span>{user.status ? user.status : "Status is empty"}</div>
            <button>Follow</button>
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