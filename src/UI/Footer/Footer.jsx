import React from "react";
import styles from "./Footer.module.scss";
import { NavLink } from "react-router-dom";
import Icon from '@material-ui/core/Icon';

export const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
            <div>
                    <NavLink to={"/profile"}>
                        <div className={styles.link_wrapper}><div><Icon>people</Icon></div><div>Social Network</div></div>
                    </NavLink>
                </div>
            </footer>
        </>
    )
}