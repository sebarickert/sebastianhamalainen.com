import React from 'react';

import './listing.scss';

const Listing = ({ listingComponent, arrayOfContent, listingClass }) => {
  const ListingComponent = listingComponent;
	return (
		<ul className={`listing ${listingClass ? listingClass : ''}`}>
			{arrayOfContent.map((props) => (
				<li className="listing__item" key={props.node.id}>
					<ListingComponent {...props} />
				</li>
			))}
		</ul>
	);
};

export default Listing;
