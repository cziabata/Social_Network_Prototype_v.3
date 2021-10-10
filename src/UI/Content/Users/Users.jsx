import React from "react";
import { Paginator } from "../../Utils/Paginator/Paginator";
export const Users = (props) => {
    return (
        <>
            <div>
                <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                           onPageChanged={props.onPageChanged}/>
                {props.users}
            </div>
        </>
    )
}