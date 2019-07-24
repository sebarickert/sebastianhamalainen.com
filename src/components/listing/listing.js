import React from 'react';

import './listing.scss';

const Listing = ({ listingComponent, arrayOfContent, listingClass }) => {
	const ListingComponent = listingComponent;
	return (
		<ul className={`listing ${listingClass ? listingClass : ''}`}>
			{arrayOfContent.map((e) => (
				<li className="listing__item" key={e.node.id}>
					<ListingComponent data={e} />
				</li>
			))}
		</ul>
	);
};

export default Listing;
