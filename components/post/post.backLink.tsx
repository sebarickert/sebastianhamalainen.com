import Link from 'next/link';
import { Container } from '../container/container';
import { Icon } from '../icon/icon';

export interface PostBackLinkProps {
  backLinkUrl?: string;
}

export const PostBackLink = ({ backLinkUrl }: PostBackLinkProps) => {
  return (
    <Container className="mb-16">
      <div className="mx-auto w-full max-w-screen-md">
        <Link href={backLinkUrl}>
          <a className="inline-flex items-center gap-4 font-semibold duration-200 hover:-ml-1 dark:text-white">
            <Icon type="arrow-left" />
            <span>Back to overview</span>
          </a>
        </Link>
      </div>
    </Container>
  );
};
