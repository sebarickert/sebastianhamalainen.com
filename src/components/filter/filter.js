import React from 'react';

import Button from '../button/button';
import './filter.scss';

const Filter = ({ filterItems, activeFilter, setActiveYear }) => (
  <div className="filter">
    <h3 className="filter__heading">Filter</h3>
    <div className="filter-listing">
      <Button noLink className={`filter__item ${JSON.stringify(filterItems) === JSON.stringify(activeFilter) ? 'active' : ''}`} onClick={() => setActiveYear(filterItems)}>All</Button>
      {filterItems.map(item => <Button noLink className={`filter__item ${JSON.stringify([item]) === JSON.stringify(activeFilter) ? 'active' : ''}`} key={item} onClick={() => setActiveYear([item])}>{item}</Button>)}
    </div>
  </div>
);

export default Filter;
