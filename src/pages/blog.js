import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import PageHeader from '../components/pageHeader/pageHeader';
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
						<li className="listing__item blog-teaser" key={e.node.id}>
							<Link to={`/blog/${e.node.fields.slug}`} className="blog-teaser__link">
								<h2 className="blog-teaser__heading">
									<span>{e.node.frontmatter.title} </span>
								</h2>
								<span className="blog-teaser__published">{e.node.frontmatter.date}</span>
								<p className="blog-teaser__lead">{e.node.excerpt}</p>
							</Link>
						</li>
					))}
				</ul>
			</Container>
		</Layout>
	);
};

export default BlogListingPage;
