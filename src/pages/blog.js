import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout/layout';
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
				<h1 className="page-title">Blog</h1>
				<ul className="blog-listing">
					{data.allMarkdownRemark.edges.map((e) => (
						<li className="blog-listing__item blog" key={e.node.id}>
							<Link to={`/blog/${e.node.fields.slug}`}>
								<h2 className="blog__heading">{e.node.frontmatter.title}</h2>
								<span className="blog__published">{e.node.frontmatter.published}</span>
								<p className="blog__lead">{e.node.excerpt}</p>
							</Link>
						</li>
					))}
				</ul>
			</Container>
		</Layout>
	);
};

export default BlogListingPage;
