import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import BlogLiftupListing from '../components/blogLiftupListing/blogLiftupListing';
import PortfolioLiftupListing from '../components/portfolioListingLiftup/portfolioListingLiftup';
import Introduction from '../components/introduction/introduction';
import Cta from '../components/cta/cta';

import '../scss/base.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Front-end Developer, Web Design and JS enthusiast" />
    <Introduction />
    <PortfolioLiftupListing />
    <Cta linkTo="/snippets" linkToText="Go check them out -->" primary>
      {'I\'ve created a list of code snippets for ease of use, just for you.'}
    </Cta>
    <BlogLiftupListing />
  </Layout>
);

export default IndexPage;
