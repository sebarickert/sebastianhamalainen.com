import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import PageHeader from '../components/pageHeader/pageHeader';

const AboutPage = () => {
	const data = useStaticQuery(graphql`
		{
			allMarkdownRemark(filter: { frontmatter: { type: { eq: "about" } } }) {
				edges {
					node {
						html
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<Container>
				<PageHeader title="About">
					Hi, I'm Sebastian. Front-end Developer. Web Design and JS enthusiast, also a so-called gym rat. I
					like to play around with CSS.
				</PageHeader>
				<div
					className="about__content"
					dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }}
				/>
			</Container>
		</Layout>
	);
};

export default AboutPage;
