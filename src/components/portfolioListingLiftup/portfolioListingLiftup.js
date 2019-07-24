import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import PortfolioTeaser from '../portfolioTeaser/portfolioTeaser';
import Listing from '../listing/listing';
import Button from '../button/button';

const PortfolioListingLiftup = () => {
	const data = useStaticQuery(graphql`
		{
			allMarkdownRemark(
				sort: { fields: [frontmatter___date], order: DESC }
				filter: { frontmatter: { type: { eq: "portfolio" } } }
				limit: 6
			) {
				edges {
					node {
						frontmatter {
							title
							teaser_image {
								childImageSharp {
									fluid(maxWidth: 800, maxHeight: 453, quality: 100) {
										src
									}
								}
							}
						}
						id
						fields {
							slug
						}
					}
				}
			}
		}
	`);

	return (
		<React.Fragment>
			<Listing
				arrayOfContent={data.allMarkdownRemark.edges}
				listingComponent={PortfolioTeaser}
				listingClass="listing--col-2"
			/>
			<Button linkTo="/portfolio" buttonClass="button--cta">
				See all portfolio showcases
			</Button>
		</React.Fragment>
	);
};

export default PortfolioListingLiftup;
