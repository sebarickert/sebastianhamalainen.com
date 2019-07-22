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
			excerpt
		}
	}
`;

const Blog = (props) => (
	<Layout>
		<SEO
			title={`${props.data.markdownRemark.frontmatter.title} | Blog`}
			description={props.data.markdownRemark.excerpt}
		/>
		<Container>
			<h1 className="blog__heading">{props.data.markdownRemark.frontmatter.title}</h1>
			<span className="blog__published">
				{props.data.markdownRemark.frontmatter.date} – {props.data.markdownRemark.timeToRead} min read
			</span>
			<div className="blog__content" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
		</Container>
	</Layout>
);

export default Blog;
