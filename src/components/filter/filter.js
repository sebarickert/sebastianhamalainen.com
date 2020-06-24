import React from 'react';

import Button from '../button/button';
import Container from '../container/container';
import IconFilter from '../../assets/icon--filter.svg';
import './filter.scss';

const Filter = ({ filterItems, activeFilter, setActiveYear }) => (
  <div className="filter">
    <Container>
      <h3 className="filter__heading">
        <IconFilter />
        Filter
      </h3>
    </Container>
    <div className="filter-slider">
      <Container>
        <div className="filter-listing">
          <Button filter noLink className={`filter__item ${JSON.stringify(filterItems) === JSON.stringify(activeFilter) ? 'active' : ''}`} onClick={() => setActiveYear(filterItems)}>All</Button>
          {filterItems.map(item => <Button filter noLink className={`filter__item ${JSON.stringify([item]) === JSON.stringify(activeFilter) ? 'active' : ''}`} key={item} onClick={() => setActiveYear([item])}>{item}</Button>)}
        </div>
      </Container>
    </div>
  </div>
);

export default Filter;
