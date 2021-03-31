import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PortfolioTeaser from "../portfolioTeaser/portfolioTeaser";
import Container from "../container/container";
import Spacer from "../spacer/spacer";

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

const PortfolioLiftup = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        filter: { fileAbsolutePath: { regex: "//content/portfolio//" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1
      ) {
        edges {
          node {
            frontmatter {
              title
              lead
              date(formatString: "MMMM DD, YYYY")
              stack
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
          Latest showcase
        </h2>
        {posts &&
          posts.map(({ node: { fields, frontmatter } }: PostsProps) => (
            <PortfolioTeaser
              key={frontmatter.id}
              {...fields}
              {...frontmatter}
            />
          ))}
      </Spacer>
    </Container>
  );
};

export default PortfolioLiftup;
