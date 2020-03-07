import React from 'react';
import { graphql } from 'gatsby';


import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import PortfolioTeaser from '../components/portfolioTeaser/portfolioTeaser';
import Hero from '../components/hero/hero';
import Listing from '../components/listing/listing';
import Heading from '../components/heading/heading';
import Pager from '../components/pager/pager';
import SEO from '../components/seo';

export const PortfolioListingPageQuery = graphql`
  query PortfolioListingPageQuery($skip: Int!, $limit: Int!) {
    allMdx(
      filter: { fileAbsolutePath: { regex: "//content/portfolio//" } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            lead
            date(formatString: "MMMM DD, YYYY")
            teaser_image {
              childImageSharp {
                fluid(quality: 100) {
                  src
                }
              }
            }
          }
          id
          fields {
            slug
          }
        }
      }
    }
  }
`;

const PortfolioListingPage = ({ data: { allMdx }, pageContext }) => {
  const { edges: posts } = allMdx;
  return (
    <Layout>
      <SEO
        title="Portfolio"
        description="Below I've compiled a list of stuff that I have created over the years, professional and free-time projects."
      />
      <Hero title="Portfolio">
        Here you’ll find a curated selection of my work over the years,
        including professional work and side projects.
      </Hero>
      <Container>
        <Heading className="heading--center">All portfolio showcases</Heading>
        <Listing
          arrayOfContent={posts}
          listingComponent={PortfolioTeaser}
        />
        <Pager {...pageContext} />
      </Container>
    </Layout>
  );
};

export default PortfolioListingPage;
