import React from 'react';

import './listing.scss';

const Listing = ({ listingComponent, arrayOfContent, listingClass }) => {
  const ListingComponent = listingComponent;
  return (
    <ul className={`listing ${listingClass || ''}`}>
      {arrayOfContent.map(({ node }) => (
        <li className="listing__item" key={node.id}>
          <ListingComponent {...node} {...node.frontmatter} {...node.fields} />
        </li>
      ))}
    </ul>
  );
};

export default Listing;
