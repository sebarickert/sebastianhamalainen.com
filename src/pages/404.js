import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import PageHeader from '../components/pageHeader/pageHeader';

const NotFoundPage = () => {
	return (
		<Layout>
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
