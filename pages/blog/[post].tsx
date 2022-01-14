import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getSanityContent } from '../../utils/getSanityContent';
import { Post } from '../../components/post/post';
import { SEO } from '../../components/seo/seo';

interface BlogPostProps {
  title: string;
  lead: string;
  content: MDXRemoteSerializeResult;
  publishedAt: Date;
}

export const getStaticPaths = async () => {
  const data = await getSanityContent({
    query: `
      query AllPosts {
        allPost {
          slug {
            current
          }
        }
      }
    `,
  });

  const paths = data.allPost.map(({ slug: { current } }) => {
    return {
      params: { post: current },
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
      query PostBySlug($slug: String!) {
        allPost(where: { slug: { current: { eq: $slug } } }) {
          title
          lead
          content
          publishedAt
        }
      }
    `,
    variables: { slug: params.post },
  });

  const { title, lead, content: contentRaw, publishedAt } = data.allPost[0];
  const serializedContent = await serialize(contentRaw);

  return {
    props: {
      title,
      lead,
      content: serializedContent,
      publishedAt,
    },
    revalidate: 60,
  };
};

export default function BlogPost({ title, lead, content, publishedAt }: BlogPostProps) {
  return (
    <>
      <SEO title={title} description={lead} />
      <Post title={title} lead={lead} content={content} date={publishedAt} backLinkUrl="/blog" />
    </>
  );
}
