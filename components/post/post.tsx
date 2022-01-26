import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { widgetComponents } from '../../constants/widgetComponents';
import { Container } from '../container/container';
import NextImage from 'next/image';
import { Layout } from '../layout/layout';
import { PostHeader } from './post.header';
import { PostBackLink } from './post.backLink';

export interface PostProps {
  title: string;
  lead: string;
  content: MDXRemoteSerializeResult;
  date: Date;
  backLinkUrl?: string;
  image?: { url: string; width: number; height: number };
  dateUpdated?: boolean;
  children?: React.ReactNode;
}

export const Post = ({ title, lead, content, date, backLinkUrl, image, dateUpdated, children }: PostProps) => {
  return (
    <Layout>
      <article className="-mt-8 py-16 lg:mt-0">
        {backLinkUrl && <PostBackLink backLinkUrl={backLinkUrl} />}
        <Container>
          <section className="prose prose-xl prose-blue mx-auto w-full max-w-screen-md dark:prose-invert">
            <PostHeader title={title} lead={lead} date={date} dateUpdated={dateUpdated} />
            {image && (
              <figure className="-mx-8 !mt-0 !mb-16 overflow-hidden border-t-2 border-b-2 dark:border-b-neutral-850 dark:border-t-neutral-850 md:-mx-10 lg:-mx-24 prose:rounded-md prose:border-2 dark:prose:border-neutral-850">
                <NextImage src={image.url} height={image.height} width={image.width} layout="responsive" />
              </figure>
            )}
            <MDXRemote {...content} components={widgetComponents} lazy />
            {children}
          </section>
        </Container>
      </article>
    </Layout>
  );
};
