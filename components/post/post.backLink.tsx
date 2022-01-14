import Link from 'next/link';
import { Container } from '../container/container';
import { Icon } from '../icon/icon';

export interface PostBackLinkProps {
  backLinkUrl?: string;
}

export const PostBackLink = ({ backLinkUrl }: PostBackLinkProps) => {
  return (
    <Container className="mb-16">
      <div className="max-w-screen-md w-full mx-auto">
        <Link href={backLinkUrl}>
          <a className="font-semibold inline-flex items-center gap-4 hover:-ml-1 duration-200">
            <Icon type="arrow-left" />
            <span>Back to overview</span>
          </a>
        </Link>
      </div>
    </Container>
  );
};
