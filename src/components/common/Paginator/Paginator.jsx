import React, {useState} from 'react';
import styles from './Paginator.module.sass'

const Paginator = ({currentPage, totalItemsCount, pageSize, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize); // общее количество Юзеров* / размер страницы
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize); // количество отображаемых страниц в пагинаторе
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;
    return (
            <div className={styles.pagesBlock}>
                {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}

                {pages
                    .filter( page => page >= leftPortionPageNumber && page <= rightPortionNumber)
                    .map( (page, index) => {
                    return (
                        <span key={index}
                              className={currentPage === page ? styles.selectedPage : ""}
                              onClick={() => {onPageChanged(page)}}>{page}
                        </span>
                    )
                })}
                {portionCount > portionNumber &&
                <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}

            </div>

    )
}

export default Paginator;