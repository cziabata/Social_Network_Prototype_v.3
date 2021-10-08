import React, { useState, useEffect } from "react";
import styles from "./ProfileContainer.module.scss";

export const ProfileStatus = (props) => {

    let [status, setStatus] = useState(props.status);
    let [editeMode, setEditeMode] = useState(false);

    useEffect( ()=>setStatus(props.status), [props.status] );

    let activateEditeMode = () => {
        setEditeMode(true)
    }
    let onStatusChange = (event) => {
        setStatus(event.target.value);
    }
    let deactivateEditeMode = () => {
        setEditeMode(false);
        props.updateStatus(status);
    }

    return (
        <>
            { editeMode 
                ? <input autoFocus={true} onChange={onStatusChange} onBlur={deactivateEditeMode} value={status}/> 
                : <div className={styles.userStatus} onDoubleClick={activateEditeMode}>{status || "---"}</div>}
        </>
    )
}

