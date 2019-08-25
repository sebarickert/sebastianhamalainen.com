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
				limit: 3
			) {
				edges {
					node {
						frontmatter {
							title
							lead
							date(formatString: "MMMM DD, YYYY")
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
				listingClass="listing--col-3"
			/>
			<Button linkTo="/portfolio" buttonClass="button--cta">
				See all portfolio showcases
			</Button>
		</React.Fragment>
	);
};

export default PortfolioListingLiftup;
