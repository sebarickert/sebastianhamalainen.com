import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import BlogLiftupListing from '../components/blogLiftupListing/blogLiftupListing';
import FrontpageBlock from '../components/frontpageBlock/frontpageBlock';
import Hero from '../components/hero/hero';

const IndexPage = () => (
	<Layout>
		<SEO title="Front-end Developer, Web Design and JS enthusiast" />
		<Hero title="Hi, I'm Sebastian">
			Front-end Developer located in Helsinki, Finland. Web Design and JS enthusiast, also a so-called gym rat. I
			like to play around with CSS.
		</Hero>
		<FrontpageBlock blockComponent={BlogLiftupListing}>Latest blogs</FrontpageBlock>
	</Layout>
);

export default IndexPage;
