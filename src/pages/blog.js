import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Container from '../components/container/container';

const BlogListingPage = () => {
	const data = useStaticQuery(graphql`
		{
			allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
				edges {
					node {
						frontmatter {
							title
							published
						}
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
		<Container>
			<h1 className="page-title">Blog</h1>
			<ul className="blog-listing">
				{data.allMarkdownRemark.edges.map((e) => (
					<li className="blog-listing__item blog">
						<Link to={`/blog/${e.node.fields.slug}`}>
							<h2 className="blog__heading">{e.node.frontmatter.title}</h2>
							<span className="blog__published">{e.node.frontmatter.published}</span>
							<p class="blog__lead">{e.node.excerpt}</p>
						</Link>
					</li>
				))}
			</ul>
		</Container>
	);
};

export default BlogListingPage;
