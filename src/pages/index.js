import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import BlogLiftupListing from '../components/blogLiftupListing/blogLiftupListing';
import PortfolioLiftupListing from '../components/portfolioListingLiftup/portfolioListingLiftup';
import FrontpageBlock from '../components/frontpageBlock/frontpageBlock';
import Hero from '../components/hero/hero';
import '../scss/base.scss';

const portfolioMoreButton = { text: 'See portfolio showcases -->', url: '/portfolio' };
const blogMoreButton = { text: 'See blog posts -->', url: '/blog' };

const IndexPage = () => (
  <Layout>
    <SEO title="Front-end Developer, Web Design and JS enthusiast" />
    <Hero title="Hi, I'm Sebastian">
      Front-end Developer located in Helsinki, Finland. Web Design and JS enthusiast, also a so-called gym rat. I like
      to play around with CSS.
    </Hero>
    <div className="frontpage-block-container">
      <FrontpageBlock blockComponent={PortfolioLiftupListing} blockComponentClass="listing--one-liner" blockHeadingClass="heading--no-margin" moreButton={portfolioMoreButton}>
        Latest portfolio showcases
      </FrontpageBlock>
      <FrontpageBlock blockComponent={BlogLiftupListing} blockComponentClass="listing--one-liner gray-light" blockHeadingClass="heading--no-margin" moreButton={blogMoreButton}>
        Latest blog posts
      </FrontpageBlock>
    </div>
  </Layout>
);

export default IndexPage;
