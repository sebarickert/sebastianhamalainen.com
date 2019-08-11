import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import SEO from '../components/seo';
import LinkContainer from '../components/linkContainer/linkContainer';
import LinkContainerLink from '../components/linkContainer/linkContainer.link';
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

const Blog = ({ data }) => {
	const { markdownRemark } = data;
	const { frontmatter, excerpt, timeToRead, html } = markdownRemark;
	const { title, date } = frontmatter;
	return (
		<Layout>
			<SEO title={`${title} | Blog`} description={excerpt} />
			<Container>
				<LinkContainer>
					<LinkContainerLink linkTarget="/blog" linkContainerLinkClass="mb--2">
						Go back to Blog
					</LinkContainerLink>
				</LinkContainer>
				<h1 className="blog__heading">{title}</h1>
				<span className="blog__published">
					{date} – {timeToRead} min read
				</span>
				<div className="blog__content" dangerouslySetInnerHTML={{ __html: html }} />
			</Container>
		</Layout>
	);
};

export default Blog;
