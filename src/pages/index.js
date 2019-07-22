import React from 'react';

import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import SEO from '../components/seo';

const IndexPage = () => (
	<Layout>
		<SEO title="Front-end Developer, Web Design and JS enthusiast" />
		<Container>
			<h1>Frontpage</h1>
		</Container>
	</Layout>
);

export default IndexPage;
