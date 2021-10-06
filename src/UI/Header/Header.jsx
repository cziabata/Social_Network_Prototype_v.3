import React from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import Icon from '@material-ui/core/Icon';

export const Header = (props) => {
    return (
        <>
            <header className={styles.header}>
                <div>
                    <NavLink to={"/profile"}>
                        <div className={styles.link_wrapper}><div><Icon>people</Icon></div><div>Social Network</div></div>
                    </NavLink>
                </div>
                <div>
                    {props.isAuth 
                    ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={"/login"}>
                        <div className={styles.link_wrapper}><div><Icon>login</Icon></div><div>Login</div></div>
                      </NavLink>
                    }
                </div>
            </header>
        </>
    )
}