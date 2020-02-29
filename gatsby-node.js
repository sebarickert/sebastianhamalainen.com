const path = require("path")
const slugify = require('@sindresorhus/slugify')
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = (...args) => {
  if (args[0].node.internal.type === "Mdx") {
    onCreateMdxNode(...args)
  }
}

function onCreateMdxNode({ node, getNode, actions }) {
  const parentNode = getNode(node.parent)
  const { createNodeField } = actions

  const { date, description, title } = node.frontmatter
  let slug =
    node.frontmatter.slug ||
    createFilePath({ node, getNode, basePath: `content` })

  if (node.fileAbsolutePath.includes("content/blog/")) {
    slug = `/blog/${node.frontmatter.slug || slugify(parentNode.relativeDirectory)}`
  }

  if (node.fileAbsolutePath.includes("content/portfolio/")) {
    slug = `/portfolio/${node.frontmatter.slug}`
  }

  if (node.fileAbsolutePath.includes("content/misc/")) {
    slug = `/${node.frontmatter.slug || slugify(parentNode.relativeDirectory)}`
  }

  createNodeField({
    name: "slug",
    node,
    value: slug,
  })

  createNodeField({
    name: "title",
    node,
    value: title,
  })

  createNodeField({
    name: "date",
    node,
    value: date,
  })

  createNodeField({
    name: "description",
    node,
    value: description,
  })
}

const createPosts = (createPage, edges) => {
  edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        id: node.id,
        slug: node.fields.slug,
      },
    })
  })
}

function createBlogPages({ data, actions }) {
  if (!data.edges.length) {
    throw new Error("There are no posts!")
  }

  const { edges } = data
  const { createPage } = actions
  createPosts(createPage, edges)
  return null
}

function createMiscPages({ data, actions }) {
  if (!data.edges.length) {
    throw new Error("There are no posts!")
  }

  const { edges } = data
  const { createPage } = actions
  createPosts(createPage, edges)
  return null
}

function createPortfolioPages({ data, actions }) {
  if (!data.edges.length) {
    throw new Error("There are no posts!")
  }

  const { edges } = data
  const { createPage } = actions
  createPosts(createPage, edges)
  return null
}

exports.createPages = async ({ actions, graphql }) => {
  const { data, errors } = await graphql(`
  fragment PostDetails on Mdx {
    fileAbsolutePath
    id
    fields {
      title
      slug
      date
      description
    }
  }
  {
    blog: allMdx(filter: {fileAbsolutePath: {regex: "//content/blog//"}}, sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          ...PostDetails
        }
      }
    }
    misc: allMdx(filter: {fileAbsolutePath: {regex: "//content/misc//"}}, sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          ...PostDetails
        }
      }
    }
  }
  `)

  if (errors) {
    return Promise.reject(errors)
  }

  const { blog, misc } = data

  createBlogPages({
    blogPath: "/blog",
    data: blog,
    actions,
  })

  createMiscPages({
    miscPath: "/",
    data: misc,
    actions,
  })

  // createPortfolioPages({
  //   blogPath: '/portfolio',
  //   data: portfolio,
  //   actions,
  // })
}
