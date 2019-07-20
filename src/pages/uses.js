import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import PageHeader from '../components/pageHeader/pageHeader';

const UsesPage = () => {
	const data = useStaticQuery(graphql`
		{
			allMarkdownRemark(filter: { frontmatter: { type: { eq: "uses" } } }) {
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
				<PageHeader title="Uses">
					The following is a list of the tools and software that I use on a daily basis to help me build the
					internet.
				</PageHeader>
				<div
					className="uses__content"
					dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }}
				/>
			</Container>
		</Layout>
	);
};

export default UsesPage;
