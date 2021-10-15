import React from "react";
import { Users } from "../Users/Users";
import { getUsers, onPageChanged, follow, unfollow } from "../../../REDUX/usersReducer";
import { connect } from "react-redux";
import user_photo from "../../Utils/img/user_img.jpg";
import styles from './Users.module.scss';
import { NavLink } from "react-router-dom";

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
                <NavLink to={"/profile/" + user.id}>
                    <img src={user.photos.large || user_photo} alt="user_photo" className={styles.user_photo}/>
                </NavLink>
                <span>User id: </span>{user.id}
            </div>
            <div>{user.name}</div>
            <div><span>User status: </span>{user.status ? user.status : "Status is empty"}</div>
            { user.followed 
                ? <button disabled={this.props.followingInProgress.some( id => id === user.id)} 
                          onClick={()=>{this.props.unfollow(user.id)}}>Unfollow</button>
                : <button disabled={this.props.followingInProgress.some( id => id === user.id)}
                          onClick={()=>{this.props.follow(user.id)}}>Follow</button>}
        </div> )
        return(
            <>
                <Users users={users} totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       onPageChanged={this.onPageChanged}
                       portionSize={this.props.portionSize}
                />
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
        followingInProgress: state.usersReducer.followingInProgress,
    }
}
export default connect(mapStateToProps, {getUsers, onPageChanged, follow, unfollow})(UsersContainer)