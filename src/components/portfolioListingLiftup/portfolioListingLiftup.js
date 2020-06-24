import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import PortfolioTeaser from '../portfolioTeaser/portfolioTeaser';
import Spacer from '../spacer/spacer';
import Listing from '../listing/listing';
import Container from '../container/container';
import Heading from '../heading/heading';
import Button from '../button/button';
import IconArrowRight from '../../assets/icon--arrow--right.svg';

import './portfolioListingLiftup.scss';

const PortfolioListingLiftup = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        filter: { fileAbsolutePath: { regex: "//content/portfolio//" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1
      ) {
        edges {
          node {
            frontmatter {
              title
              lead
              date(formatString: "MMMM DD, YYYY")
              stack
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
  `);

  return (
    <div className="portfolio-liftup">
      <Container>
        <Spacer large>
          <Heading className="h1">Latest showcase</Heading>
          <Listing
            arrayOfContent={data.allMdx.edges}
            listingComponent={PortfolioTeaser}
          />
          <Button primary linkTo="/portfolio" className="portfolio-liftup__button">
            See portfolio showcases
            <IconArrowRight />
          </Button>
        </Spacer>
      </Container>
    </div>
  );
};

export default PortfolioListingLiftup;
