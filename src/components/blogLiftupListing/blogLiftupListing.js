import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import BlogTeaser from '../blogTeaser/blogTeaser';
import Listing from '../listing/listing';
import Button from '../button/button';

const BlogLiftupListing = () => {
	const data = useStaticQuery(graphql`
		{
			allMarkdownRemark(
				sort: { fields: [frontmatter___date], order: DESC }
				filter: { frontmatter: { type: { eq: "blog" } } }
				limit: 3
			) {
				edges {
					node {
						frontmatter {
							title
							date(formatString: "MMMM DD, YYYY")
							type
						}
						id
						excerpt
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
			<Listing arrayOfContent={data.allMarkdownRemark.edges} listingComponent={BlogTeaser} />
			<Button linkTo="/blog" buttonClass="button--cta">
				See all posts
			</Button>
		</React.Fragment>
	);
};

export default BlogLiftupListing;
