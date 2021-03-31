import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout/layout";
import Container from "../components/container/container";
import Hero from "../components/hero/hero";
import SEO from "../components/seo/seo";
import HeroLead from "../components/hero/hero.lead";
import BlogTeaser from "../components/blogTeaser/blogTeaser";
import Spacer from "../components/spacer/spacer";

export interface BlogProps {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      date: Date;
    };
    excerpt: string;
  };
}

const BlogListingPage = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        filter: { fileAbsolutePath: { regex: "//content/blog//" } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
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
    <Layout>
      <SEO
        title="Blog"
        description="Here I'll dabble into different kind of topics, but most likely relating to tech and web development."
      />
      <Hero title="Blog">
        <HeroLead>
          {`Here I'll dabble into different kind of topics, but most likely
          relating to tech and web development.`}
        </HeroLead>
      </Hero>
      <Container>
        <Spacer variation="prose">
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
    </Layout>
  );
};

export default BlogListingPage;
