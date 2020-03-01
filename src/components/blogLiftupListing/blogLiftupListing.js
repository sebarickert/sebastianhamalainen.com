import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import BlogTeaser from '../blogTeaser/blogTeaser';
import Listing from '../listing/listing';

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
    <Listing
      arrayOfContent={data.allMdx.edges}
      listingComponent={BlogTeaser}
      listingClass="listing--col-2"
    />
  );
};

export default BlogLiftupListing;
