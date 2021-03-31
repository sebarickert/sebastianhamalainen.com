import React from "react";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import SEO from "../components/seo/seo";
import Layout from "../components/layout/layout";
import Container from "../components/container/container";
import Spacer from "../components/spacer/spacer";
import Hero from "../components/hero/hero";
import HeroLead from "../components/hero/hero.lead";
import PostNavigation from "../components/postNavigation/postNavigation";

interface PostProps {
  data: {
    mdx: {
      body: string;
      fields: {
        date: string;
        description: string;
        title: string;
        type: string;
      };
    };
  };
  pageContext: {
    next: {
      fields: {
        slug: string;
      };
    };
    previous: {
      fields: {
        slug: string;
      };
    };
  };
}

export const postQuery = graphql`
  query PostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      fields {
        title
        type
        date(formatString: "MMMM DD, YYYY")
        description
      }
      body
    }
  }
`;

const Post = ({ data: { mdx }, pageContext }: PostProps): JSX.Element => {
  const { title, date, description, type } = mdx.fields;
  const { next, previous } = pageContext;

  return (
    <Layout>
      <SEO
        title={type !== "misc" ? `${title} | ${type}` : title}
        description={description}
      />
      <article>
        <div>
          <Hero title={title}>
            <HeroLead>{description}</HeroLead>
            <p className="mt-12 uppercase tracking-widest text-gray-500">
              {type === "misc" || type === "snippets"
                ? `Last updated on ${date}`
                : `Published on ${date}`}
            </p>
          </Hero>
        </div>
        <Container>
          <Spacer variation="prose">
            <div className="prose prose-lg prose-blue mx-auto">
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </div>
            {(next || previous) && <PostNavigation {...pageContext} />}
          </Spacer>
        </Container>
      </article>
    </Layout>
  );
};

export default Post;
