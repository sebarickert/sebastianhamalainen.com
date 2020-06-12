import React from 'react';

import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import Spacer from '../components/spacer/spacer';
import Button from '../components/button/button';
import SEO from '../components/seo';

import '../scss/templates/404.scss';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 not found" description="The page you're looking for was moved or doesn't exist." />
    <div className="not-found-page">
      <Container variation="small">
        <Spacer large>
          <h1 className="not-found-page__heading">404 not found</h1>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h2 className="not-found-page__lead">The page you're looking for was moved or doesn't exist.</h2>
          <Button primary linkTo="/" className="not-found-page__button">{'<-- Go back to the frontpage'}</Button>
        </Spacer>
      </Container>
    </div>
  </Layout>
);

export default NotFoundPage;
