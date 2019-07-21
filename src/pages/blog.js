import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import PageHeader from '../components/pageHeader/pageHeader';
import BlogTeaser from '../components/blogTeaser/blogTeaser';
import Listing from '../components/listing/listing';

const BlogListingPage = () => {
	const data = useStaticQuery(graphql`
		{
			allMarkdownRemark(
				sort: { fields: [frontmatter___date], order: DESC }
				filter: { frontmatter: { type: { eq: "blog" } } }
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
		<Layout>
			<Container>
				<PageHeader title="Blog">
					Here I'll dabble into different kind of topics, but most likely relating to tech and web
					development.
				</PageHeader>
				<Listing arrayOfContent={data.allMarkdownRemark.edges} listingComponent={BlogTeaser} />
			</Container>
		</Layout>
	);
};

export default BlogListingPage;
