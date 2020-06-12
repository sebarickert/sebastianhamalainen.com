import React from 'react';

import './listing.scss';

const Listing = ({
  listingComponent, arrayOfContent, className, spacingLarge, col3, col3Overflow,
}) => {
  const ListingComponent = listingComponent;
  return (
    <ul className={`listing ${className || ''} ${spacingLarge ? 'listing--spacing-large' : ''} ${col3 ? 'listing--col-3' : ''} ${col3Overflow ? 'listing--col-3-overflow' : ''}`}>
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
