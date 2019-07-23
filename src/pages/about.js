import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import Hero from '../components/hero/hero';
import SEO from '../components/seo';

const AboutPage = () => {
	const data = useStaticQuery(graphql`
		{
			allMarkdownRemark(filter: { frontmatter: { type: { eq: "about" } } }) {
				edges {
					node {
						frontmatter {
							title
							description
						}
						html
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<SEO
				title={data.allMarkdownRemark.edges[0].node.frontmatter.title}
				description={data.allMarkdownRemark.edges[0].node.frontmatter.description}
			/>
			<Hero title={data.allMarkdownRemark.edges[0].node.frontmatter.title}>
				{data.allMarkdownRemark.edges[0].node.frontmatter.description}
			</Hero>
			<Container>
				<div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }} />
			</Container>
		</Layout>
	);
};

export default AboutPage;
