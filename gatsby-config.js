module.exports = {
  siteMetadata: {
    email: "hello@hamse.fi",
    twitter: "https://twitter.com/iamsebh",
    linkedin: "https://www.linkedin.com/in/sebastianhamalainen/",
    github: "https://github.com/shamalainen",
    website: "https://sebastianhamalainen.com",
    siteUrl: "https://sebastianhamalainen.com",
    author: "@iamsebh",
    title: "Sebastian",
    description:
      "Frontend Developer located in Helsinki, Finland. Web Design and JS enthusiast, also a so-called gym rat. I like to play around with CSS.",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog/`,
        name: "blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/misc/`,
        name: "misc",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/portfolio/`,
        name: "portfolio",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/snippets/`,
        name: "snippets",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md", ".markdown"],
        defaultLayouts: {
          blog: require.resolve("./src/templates/post.tsx"),
        },
        gatsbyRemarkPlugins: [
          "gatsby-remark-copy-linked-files",
          {
            resolve: "gatsby-remark-images",
            options: {
              backgroundColor: "#fafafa",
              maxWidth: 1035,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              related: false, // Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, // Optional: Disable insertion of <style> border: 0
            },
          },
          "gatsby-remark-responsive-iframe",
        ],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-remark-images",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-typegen",
      options: {
        outputPath: `src/generated/gatsby-types.d.ts`,
      },
    },
  ],
};
