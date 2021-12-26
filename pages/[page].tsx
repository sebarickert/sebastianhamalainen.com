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

export default function Page({ title, lead, content, lastUpdated }: PageProps) {
  return (
    <>
      <SEO title={title} description={lead} />
      <Post title={title} lead={lead} content={content} date={lastUpdated} dateUpdated />;
    </>
  );
}

export async function getStaticProps({ params }) {
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
  };
}

export async function getStaticPaths() {
  const data = await getSanityContent({
    query: `
      query AllPages {
        allPage {
          slug {
            current
          }
        }
      }
    `,
  });

  const pages = data.allPage;

  return {
    paths: pages.map((p) => `/${p.slug.current}`),
    fallback: false,
  };
}
