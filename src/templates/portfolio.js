import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import SEO from '../components/seo';
import './blog.scss';

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
			}
			html
			timeToRead
		}
	}
`;

const Portfolio = ({ data }) => {
	const { markdownRemark } = data;
	const { frontmatter, excerpt, timeToRead, html } = markdownRemark;
	const { title, date } = frontmatter;
	return (
		<Layout>
			<Container>
				<h1>{title}</h1>
			</Container>
		</Layout>
	);
};

export default Portfolio;
