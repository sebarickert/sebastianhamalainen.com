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
      <article className="py-16 -mt-8 lg:mt-0">
        {backLinkUrl && <PostBackLink backLinkUrl={backLinkUrl} />}
        <Container>
          <section className="prose prose-xl prose-blue mx-auto max-w-screen-md w-full">
            <PostHeader title={title} lead={lead} date={date} dateUpdated={dateUpdated} />
            {image && (
              <figure className="!mt-0 !mb-16 -mx-8 md:-mx-10 lg:-mx-24 overflow-hidden prose:rounded-md border-t-2 border-b-2 prose:border-2">
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
