import React, { useState } from "react";
import styles from "./Paginator.module.scss";

export const Paginator = (props) => {
    let pages = [];
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    for(let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }

    let [portionNumber, setPortionNumber] = useState(1);

    let portionCount = Math.ceil( pagesCount / props.portionSize );
    let leftPortionBorder = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionSize = portionNumber * props.portionSize;
    return (
        <>
                <div className={styles.paginatorWrapper}>
                    { portionCount > 1 && <button onClick={setPortionNumber(portionNumber-1)}>{"< Prev"}</button> }
                    {
                        pages.filter( 
                        page => page >= leftPortionBorder && page <= rightPortionSize).map( page => 
                        <span key={page} className={styles.page} onClick={ () => props.onPageChanged(page) }>
                            {page}
                        </span>)
                    }
                    { portionCount > portionNumber && <button onClick={setPortionNumber(portionNumber+1)}>{"Next >"}</button> }
                </div>
        </>
    )
}