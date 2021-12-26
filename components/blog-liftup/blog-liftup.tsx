import { BlogPost } from '../../pages/blog';
import { BlogTeaser } from '../blog-teaser/blog-teaser';
import { Container } from '../container/container';
import { Heading } from '../heading/heading';
import { Spacer } from '../spacer/spacer';

interface BlogLiftupProps {
  posts: BlogPost[];
}

export const BlogLiftup = ({ posts }: BlogLiftupProps): JSX.Element => {
  return (
    <section>
      <Container>
        <Spacer>
          <Heading className="mb-8 lg:mb-12 lg:text-center">Latest posts</Heading>
          <ul className="grid gap-8 lg:grid-cols-2">
            {posts.map(({ title, lead, publishedAt, slug: { current: slugRaw } }) => {
              return (
                <li key={slugRaw}>
                  <BlogTeaser title={title} lead={lead} date={publishedAt} slug={`/blog/${slugRaw}`} />
                </li>
              );
            })}
          </ul>
        </Spacer>
      </Container>
    </section>
  );
};
