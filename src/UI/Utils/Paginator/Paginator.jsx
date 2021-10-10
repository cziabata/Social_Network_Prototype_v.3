import React from "react";
import styles from "./Paginator.module.scss";

export const Paginator = (props) => {
    let pages = [];
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    for(let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }
    return (
        <>
            {
                <div className={styles.paginatorWrapper}>{pages.map( page => 
                    <span key={page} className={styles.page} onClick={ () => props.onPageChanged(page) }>
                        {page}
                    </span>)}
                </div>
            }
        </>
    )
}