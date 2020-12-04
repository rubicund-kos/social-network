import React from 'react';
import styles from './Paginator.module.sass'

const Paginator = ({currentPage, totalUsersCount, pageSize, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
            <div className={styles.pagesBlock}>
                {pages.map( (page, index) => {
                    return (
                        <span key={index}
                              className={currentPage === page ? styles.selectedPage : ""}
                              onClick={() => {onPageChanged(page)}}>{page}
                        </span>
                    )
                })}
            </div>

    )
}

export default Paginator;