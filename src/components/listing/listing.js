import React from 'react';

import './listing.scss';

const Listing = ({
  listingComponent, arrayOfContent, className = '', col2, col3, large, baseSpacing,
}) => {
  const ListingComponent = listingComponent;

  if (col2) {
    className += ' col--2';
  }

  if (col3) {
    className += ' col--3';
  }

  if (large) {
    className += ' large';
  }

  if (baseSpacing) {
    className += ' listing--base-spacing';
  }

  return (
    <ul className={`listing ${className || ''} `}>
      {arrayOfContent.map(({
        node: {
          frontmatter, fields, id, excerpt = '',
        },
      }) => (
        <li className="listing__item" key={id}>
          <ListingComponent excerpt={excerpt} {...frontmatter} {...fields} />
        </li>
      ))}
    </ul>
  );
};

export default Listing;
