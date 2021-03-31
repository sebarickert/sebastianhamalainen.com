declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "path-browserify" {
  import path from "path";
  export default path;
}

declare module "gatsby-plugin-mdx/mdx-renderer" {
  import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
  export default MDXRenderer;
}
