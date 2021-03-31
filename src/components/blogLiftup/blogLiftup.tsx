import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Container from "../container/container";
import Spacer from "../spacer/spacer";
import BlogTeaser from "../blogTeaser/blogTeaser";
import { BlogProps } from "../../pages/blog";

interface PostsProps {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      teaser_image: {
        childImageSharp: {
          gatsbyImageData: {
            images: {
              fallback: {
                src: string;
              };
            };
          };
        };
      };
      lead: string;
      stack: string[];
      id: string;
    };
  };
}

const BlogLiftup = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        filter: { fileAbsolutePath: { regex: "//content/blog//" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 4
      ) {
        edges {
          node {
            frontmatter {
              title
              teaser_image {
                childImageSharp {
                  gatsbyImageData(
                    quality: 100
                    placeholder: BLURRED
                    layout: FULL_WIDTH
                  )
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
    <Container>
      <Spacer>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight sm:leading-tight lg:leading-tight font-extrabold tracking-tight text-gray-900 mb-8 lg:mb-16">
          Latest blog posts
        </h2>
        <ul className="grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          {posts.map(
            ({ node: { id, fields, frontmatter, excerpt } }: BlogProps) => (
              <li key={id}>
                <BlogTeaser {...fields} {...frontmatter} excerpt={excerpt} />
              </li>
            )
          )}
        </ul>
      </Spacer>
    </Container>
  );
};

export default BlogLiftup;
