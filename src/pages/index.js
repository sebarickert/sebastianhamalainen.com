import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import BlogLiftupListing from '../components/blogLiftupListing/blogLiftupListing';
import FrontpageBlock from '../components/frontpageBlock/frontpageBlock';

const IndexPage = () => (
	<Layout>
		<SEO title="Front-end Developer, Web Design and JS enthusiast" />
		<FrontpageBlock blockComponent={BlogLiftupListing}>Latest blogs</FrontpageBlock>
	</Layout>
);

export default IndexPage;
