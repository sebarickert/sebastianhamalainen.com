import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import PageHeader from '../components/pageHeader/pageHeader';
import BlogTeaser from '../components/blogTeaser/blogTeaser';
import './listing.scss';
import './blog-teaser.scss';

const BlogListingPage = () => {
	const data = useStaticQuery(graphql`
		{
			allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
				<ul className="listing">
					{data.allMarkdownRemark.edges.map((e) => (
						<React.Fragment>
							{e.node.frontmatter.type === 'blog' ? (
								<li className="listing__item">
									<BlogTeaser data={e.node} />
								</li>
							) : (
								''
							)}
						</React.Fragment>
					))}
				</ul>
			</Container>
		</Layout>
	);
};

export default BlogListingPage;
