import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import BlogTeaser from '../blogTeaser/blogTeaser';
import Listing from '../listing/listing';
import Spacer from '../spacer/spacer';
import Container from '../container/container';
import Heading from '../heading/heading';
import Button from '../button/button';

const BlogLiftupListing = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        filter: { fileAbsolutePath: { regex: "//content/blog//" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2
      ) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
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

  return (
    <div className="blog-liftup">
      <Container variation="small">
        <Spacer>
          <Heading>Latest blog posts</Heading>
          <Listing
            arrayOfContent={data.allMdx.edges}
            listingComponent={BlogTeaser}
          />
          <Button primary center linkTo="/blog" className="mt--4">{'See blog posts -->'}</Button>
        </Spacer>
      </Container>
    </div>
  );
};

export default BlogLiftupListing;
