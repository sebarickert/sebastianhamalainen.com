import React from "react"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

import Layout from "../components/layout/layout"
import Container from "../components/container/container"

export const postQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      fields {
        title
        slug
        type
        date(formatString: "MMMM DD, YYYY")
        description
      }
      body
    }
  }
`

const Post = ({ data: { mdx } }) => {
  const { title, date, description, type } = mdx.fields

  return (
    <Layout>
      <Container containerClass="container--small">
        <article>
          <h1>{title}</h1>
          {type === 'misc' && <p>{description}</p>}
          <span className="post__date">
            {date}
          </span>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </article>
      </Container>
    </Layout>
  )
}

export default Post
