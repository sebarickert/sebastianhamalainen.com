import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import BlogTeaser from "../blogTeaser/blogTeaser"
import Listing from "../listing/listing"
import Button from "../button/button"

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
  `)

  return (
    <React.Fragment>
      <Listing
        arrayOfContent={data.allMdx.edges}
        listingComponent={BlogTeaser}
      />
      <Button linkTo="/blog" buttonClass="button--cta">
        See all blog posts
      </Button>
    </React.Fragment>
  )
}

export default BlogLiftupListing
