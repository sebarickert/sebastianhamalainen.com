import React from 'react';

import Button from '../button/button';

import './pager.scss';

const Pager = ({
  numPages, currentPage, contentType,
}) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? `/${contentType}` : `/${contentType}/${(currentPage - 1).toString()}`;
  const nextPage = `/${contentType}/${(currentPage + 1).toString()}`;
  return (
    <div className="pager">
      {!isFirst && (
        <Button linkTo={prevPage} secondary className="pager__item pager__item--first">{'<-- Previous'}</Button>
      )}
      {!isLast && (
        <Button linkTo={nextPage} secondary className="pager__item pager__item--last">{'Next -->'}</Button>
      )}
    </div>
  );
};

export default Pager;
