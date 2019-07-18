import React from 'react';
import { graphql } from 'gatsby';

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
	<Container>
		<h1>{props.data.markdownRemark.frontmatter.title}</h1>
		<div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
	</Container>
);

export default Blog;
