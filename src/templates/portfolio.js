import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import Hero from '../components/hero/hero';
import SEO from '../components/seo';
import Button from '../components/button/button';

import './blog.scss';

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				lead
				teaser_image {
					childImageSharp {
						fluid(maxWidth: 600, maxHeight: 340) {
							src
						}
					}
				}
				url_source
				url_web
			}
			html
			excerpt
		}
	}
`;

const Portfolio = ({ data }) => {
	const { markdownRemark } = data;
	const { frontmatter, html, excerpt } = markdownRemark;
	const { title, lead, teaser_image, url_source, url_web } = frontmatter;
	const { childImageSharp } = teaser_image;
	const { fluid } = childImageSharp;
	return (
		<Layout>
			<SEO title={`${title} | Portfolio`} description={excerpt} image={fluid.src} />
			<Hero title={title}>{lead}</Hero>
			<Container>
				<div className="portfolio__content" dangerouslySetInnerHTML={{ __html: html }} />
				<a href={url_web}>Visit site</a>
				<a href={url_source}>Visit source code</a>
				<h1 />
			</Container>
		</Layout>
	);
};

export default Portfolio;
