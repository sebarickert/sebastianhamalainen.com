const path = require('path');
const slugify = require('@sindresorhus/slugify');
const { createFilePath } = require('gatsby-source-filesystem');

function onCreateMdxNode({ node, getNode, actions }) {
  const parentNode = getNode(node.parent);
  const { createNodeField } = actions;

  const {
    date, description, title,
  } = node.frontmatter;
  let type;
  let slug = node.frontmatter.slug
    || createFilePath({ node, getNode, basePath: 'content' });

  if (node.fileAbsolutePath.includes('content/blog/')) {
    slug = `/blog/${node.frontmatter.slug || slugify(parentNode.relativeDirectory)}`;
    type = 'blog';
  }

  if (node.fileAbsolutePath.includes('content/portfolio/')) {
    slug = `/portfolio/${node.frontmatter.slug || slugify(parentNode.relativeDirectory)}`;
  }

  if (node.fileAbsolutePath.includes('content/misc/')) {
    slug = `/${node.frontmatter.slug || slugify(parentNode.relativeDirectory)}`;
    type = 'misc';
  }

  if (node.fileAbsolutePath.includes('content/snippets/')) {
    slug = `/snippets/${node.frontmatter.slug || slugify(parentNode.relativeDirectory)}`;
    type = 'snippets';
  }

  createNodeField({
    name: 'slug',
    node,
    value: slug,
  });

  createNodeField({
    name: 'type',
    node,
    value: type,
  });

  createNodeField({
    name: 'title',
    node,
    value: title,
  });

  createNodeField({
    name: 'date',
    node,
    value: date,
  });

  createNodeField({
    name: 'description',
    node,
    value: description,
  });
}

exports.onCreateNode = (...args) => {
  if (args[0].node.internal.type === 'Mdx') {
    onCreateMdxNode(...args);
  }
};

const createPosts = (createPage, edges) => {
  edges.forEach(({ node, next, previous }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/post.js'),
      context: {
        id: node.id,
        slug: node.fields.slug,
        next,
        previous,
      },
    });
  });
};

function createBlogPages({ data, actions }) {
  if (!data.edges.length) {
    throw new Error('There are no posts!');
  }

  const { edges } = data;
  const { createPage } = actions;
  createPosts(createPage, edges);
  return null;
}

function createMiscPages({ data, actions }) {
  if (!data.edges.length) {
    throw new Error('There are no posts!');
  }

  const { edges } = data;
  const { createPage } = actions;
  createPosts(createPage, edges);
  return null;
}

function createSnippetsPages({ data, actions }) {
  if (!data.edges.length) {
    throw new Error('There are no posts!');
  }

  const { edges } = data;
  const { createPage } = actions;
  createPosts(createPage, edges);
  return null;
}

const createPortfolioPosts = (createPage, edges) => {
  edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/portfolio.js'),
      context: {
        id: node.id,
        slug: node.fields.slug,
      },
    });
  });
};

function createPortfolioPages({ data, actions }) {
  if (!data.edges.length) {
    throw new Error('There are no posts!');
  }

  const { edges } = data;
  const { createPage } = actions;
  createPortfolioPosts(createPage, edges);
  return null;
}

function createPortfolioListingPages({ data, actions }) {
  if (!data.edges.length) {
    throw new Error('There are no posts!');
  }

  const { edges: posts } = data;
  const { createPage } = actions;
  const postsPerPage = 5;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? 'portfolio/' : `portfolio/${i + 1}`,
      component: path.resolve('./src/templates/portfolio-list.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        contentType: 'portfolio',
      },
    });
  });
}

exports.createPages = async ({ actions, graphql }) => {
  const { data, errors } = await graphql(`
  fragment PostDetails on Mdx {
    fileAbsolutePath
    id
    fields {
      title
      slug
      type
      date
      description
    }
  }
  fragment PostNextPreviousDetails on Mdx {
    fields {
      title
      slug
    }
  }
  {
    blog: allMdx(filter: {fileAbsolutePath: {regex: "//content/blog//"}}, sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          ...PostDetails
        }
        next {
          ...PostNextPreviousDetails
        }
        previous {
          ...PostNextPreviousDetails
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
    portfolio: allMdx(filter: {fileAbsolutePath: {regex: "//content/portfolio//"}}, sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          ...PostDetails
        }
      }
    }
    snippets: allMdx(filter: {fileAbsolutePath: {regex: "//content/snippets//"}}, sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          ...PostDetails
        }
        next {
          ...PostNextPreviousDetails
        }
        previous {
          ...PostNextPreviousDetails
        }
      }
    }
  }
  `);

  if (errors) {
    return Promise.reject(errors);
  }

  const {
    blog, misc, portfolio, snippets,
  } = data;

  createBlogPages({
    blogPath: '/blog',
    data: blog,
    actions,
  });

  createMiscPages({
    miscPath: '/',
    data: misc,
    actions,
  });

  createSnippetsPages({
    snippetsPath: '/snippets',
    data: snippets,
    actions,
  });

  createPortfolioPages({
    portfolioPath: '/portfolio',
    data: portfolio,
    actions,
  });

  createPortfolioListingPages({
    portfolioListingPath: '/portfolio',
    data: portfolio,
    actions,
  });

  return null;
};
