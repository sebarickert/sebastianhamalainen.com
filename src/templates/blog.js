import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import Container from '../components/container/container';

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				published
			}
			html
		}
	}
`;

const Blog = (props) => (
	<Layout>
		<Container>
			<h1>{props.data.markdownRemark.frontmatter.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
		</Container>
	</Layout>
);

export default Blog;
