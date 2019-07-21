import React from 'react';

import './listing.scss';

const Listing = (props) => {
	const ListingComponent = props.listingComponent;
	return (
		<ul className="listing">
			{props.arrayOfContent.map((e) => (
				<li className="listing__item">
					<ListingComponent data={e} />
				</li>
			))}
		</ul>
	);
};

export default Listing;
