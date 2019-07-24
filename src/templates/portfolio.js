import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import Hero from '../components/hero/hero';
import SEO from '../components/seo';
import LinkContainer from '../components/linkContainer/linkContainer';
import LinkContainerLink from '../components/linkContainer/linkContainer.link';

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				lead
				teaser_image {
					childImageSharp {
						fluid(maxWidth: 800, maxHeight: 453, quality: 100) {
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
				<LinkContainer>
					{url_web ? <LinkContainerLink linkTarget={url_web}>Visit site</LinkContainerLink> : ''}
					{url_source ? <LinkContainerLink linkTarget={url_source}>Visit source code</LinkContainerLink> : ''}
				</LinkContainer>
			</Container>
		</Layout>
	);
};

export default Portfolio;
