import React from 'react';

import './listing.scss';

const Listing = ({ listingComponent, arrayOfContent }) => {
	const ListingComponent = listingComponent;
	return (
		<ul className="listing">
			{arrayOfContent.map((e) => (
				<li className="listing__item" key={e.node.id}>
					{console.log(e)}
					<ListingComponent data={e} />
				</li>
			))}
		</ul>
	);
};

export default Listing;
