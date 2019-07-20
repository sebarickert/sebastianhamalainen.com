import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import './blog.scss';

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				published
			}
			html
			timeToRead
		}
	}
`;

const Blog = (props) => (
	<Layout>
		<Container>
			<h1 className="blog__heading">{props.data.markdownRemark.frontmatter.title}</h1>
			<span className="blog__published">
				{props.data.markdownRemark.frontmatter.published} – {props.data.markdownRemark.timeToRead} min read
			</span>
			<div className="blog__content" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
		</Container>
	</Layout>
);

export default Blog;
