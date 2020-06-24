import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import BlogTeaser from '../blogTeaser/blogTeaser';
import Spacer from '../spacer/spacer';
import Container from '../container/container';
import Heading from '../heading/heading';
import Listing from '../listing/listing';
import Button from '../button/button';
import IconArrowRight from '../../assets/icon--arrow--right.svg';

import './blogLiftupListing.scss';

const BlogLiftupListing = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        filter: { fileAbsolutePath: { regex: "//content/blog//" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 3
      ) {
        edges {
          node {
            frontmatter {
              title
              teaser_image {
                childImageSharp {
                  fixed(width: 600, height: 429, quality: 100) {
                    src
                  }
                }
              }
            }
            id
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const { edges: posts } = data.allMdx;

  return (
    <div className="blog-liftup">
      <Spacer large>
        <Container>
          <Heading className="h1">Latest blog posts</Heading>
        </Container>
        <Container>
          <Listing
            arrayOfContent={posts}
            listingComponent={BlogTeaser}
            col3
          />
        </Container>
        <Container>
          <Button primary linkTo="/blog" className="blog-liftup__button">
            See blog posts
            <IconArrowRight />
          </Button>
        </Container>
      </Spacer>
    </div>
  );
};

export default BlogLiftupListing;
