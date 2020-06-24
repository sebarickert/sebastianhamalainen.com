import React from 'react';

import IconFirst from '../../assets/icon--pager--first.svg';
import IconLast from '../../assets/icon--pager--last.svg';
import IconNext from '../../assets/icon--pager--next.svg';
import IconPrevious from '../../assets/icon--pager--previous.svg';

import './pager.scss';

const Pager = ({
  numPages, currentPage, contentType,
}) => {
  const firstPage = `/${contentType}`;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const lastPage = `/${contentType}/${numPages}`;
  const nextPage = `/${contentType}/${(currentPage + 1).toString()}`;
  const prevPage = currentPage - 1 === 1 ? `/${contentType}` : `/${contentType}/${(currentPage - 1).toString()}`;

  return (
    <ul className="pager">
      <li className="pager__item">
        {!isFirst ? (
          <a className="pager__link" href={firstPage} title="Go to first page" aria-label="Go to first page"><IconFirst /></a>
        ) : (
          <span className="pager__link"><IconFirst /></span>
        )}
      </li>
      <li className="pager__item">
        {!isFirst ? (
          <a className="pager__link" href={prevPage} title="Go to previous page" aria-label="Go to previous page"><IconPrevious /></a>
        ) : (
          <span className="pager__link"><IconPrevious /></span>
        )}
      </li>
      {[...Array(numPages)].map((_, count) => {
        const number = count + 1;
        const url = number === 1 ? `/${contentType}` : `/${contentType}/${number}`;
        return (
          <li className="pager__item" key={number} data-is-current-page={number === currentPage}>
            {number === currentPage ? (
              <span className={`pager__link ${number === currentPage ? 'is-active' : ''}`} data-keep-visible="true">
                {number}
              </span>
            ) : (
              <a className={`pager__link ${number === currentPage ? 'is-active' : ''}`} title={`Go to page ${number}`} aria-label={`Go to page ${number}`} href={url}>
                {number}
              </a>
            )}
          </li>
        );
      })}
      <li className="pager__item">
        {!isLast ? (
          <a className="pager__link" href={nextPage} title="Go to next page" aria-label="Go to next page"><IconNext /></a>
        ) : (
          <span className="pager__link"><IconNext /></span>
        )}
      </li>
      <li className="pager__item">
        {!isLast ? (
          <a className="pager__link" href={lastPage} title="Go to last page" aria-label="Go to last page"><IconLast /></a>
        ) : (
          <span className="pager__link"><IconLast /></span>
        )}
      </li>
    </ul>
  );
};

export default Pager;
