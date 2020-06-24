// // Import environment variables from .env files
require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    email: 'hello@hamse.fi',
    twitter: 'https://twitter.com/iamsebh',
    linkedin: 'https://www.linkedin.com/in/sebastianhamalainen/',
    github: 'https://github.com/shamalainen',
    website: 'https://sebastianhamalainen.com',
    siteUrl: 'https://sebastianhamalainen.com',
    author: '@iamsebh',
    title: 'Sebastian',
    description:
      'Front-end Developer. Web Design and JS enthusiast, also a so-called gym rat. I like to play around with CSS.',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog/`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/misc/`,
        name: 'misc',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/portfolio/`,
        name: 'portfolio',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/snippets/`,
        name: 'snippets',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md', '.markdown'],
        defaultLayouts: {
          blog: require.resolve('./src/templates/post.js'),
        },
        gatsbyRemarkPlugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-images',
            options: {
              backgroundColor: '#fafafa',
              maxWidth: 1035,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              related: false, // Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, // Optional: Disable insertion of <style> border: 0
            },
          },
          'gatsby-remark-responsive-iframe',
        ],
      },
    },
    'gatsby-remark-images',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Inter:300,600,700',
        ],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'sebastianhamalainen.com',
        short_name: 'shamalainen',
        start_url: '/',
        background_color: '#030b23',
        theme_color: '#030b23',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/images/logo.jpg', // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: 'use-credentials',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-73411608-1',
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-polyfill-io',
      options: {
        features: ['String.prototype.endsWith', 'fetch', 'es6'],
      },
    },
  ],
};
