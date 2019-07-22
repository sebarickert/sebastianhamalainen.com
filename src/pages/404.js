import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import PageHeader from '../components/pageHeader/pageHeader';
import SEO from '../components/seo';

const NotFoundPage = () => {
	return (
		<Layout>
			<SEO title="404 not found" description="The page you're looking for was moved or doesn't exist." />
			<Container>
				<PageHeader title="404 not found">The page you're looking for was moved or doesn't exist.</PageHeader>
				<Link to="/" className="h2">
					Go back to the frontpage
				</Link>
			</Container>
		</Layout>
	);
};

export default NotFoundPage;
