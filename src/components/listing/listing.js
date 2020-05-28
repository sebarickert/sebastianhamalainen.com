import React from 'react';

import './listing.scss';

const Listing = ({
  listingComponent, arrayOfContent, className, spacingLarge,
}) => {
  const ListingComponent = listingComponent;
  return (
    <ul className={`listing ${className || ''} ${spacingLarge ? 'listing--spacing-large' : ''}`}>
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
