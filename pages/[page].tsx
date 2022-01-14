import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getSanityContent } from '../utils/getSanityContent';
import { Post } from '../components/post/post';
import { SEO } from '../components/seo/seo';

interface PageProps {
  title: string;
  lead: string;
  content: MDXRemoteSerializeResult;
  lastUpdated: Date;
}

export const getStaticPaths = async () => {
  const data = await getSanityContent({
    query: `
      query AllPages {
        allPage(where: { slug: { current: { nin: ["portfolio", "blog"] } } }) {
          slug {
            current
          }
        }
      }
    `,
  });

  const paths = data.allPage.map(({ slug: { current } }) => {
    return {
      params: { page: current },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const data = await getSanityContent({
    query: `
      query PageBySlug($slug: String!) {
        allPage(where: { slug: { current: { eq: $slug } } }) {
          title
          lead
          content
          lastUpdated
        }
      }
    `,
    variables: {
      slug: params.page,
    },
  });

  const { title, lead, content: contentRaw, lastUpdated } = data.allPage[0];
  const serializedContent = await serialize(contentRaw);

  return {
    props: {
      title,
      lead,
      content: serializedContent,
      lastUpdated,
    },
    revalidate: 60,
  };
};

export default function Page({ title, lead, content, lastUpdated }: PageProps) {
  return (
    <>
      <SEO title={title} description={lead} />
      <Post title={title} lead={lead} content={content} date={lastUpdated} dateUpdated />
    </>
  );
}
