import { useRouter } from 'next/router';
import NextLink from 'next/link';

type LinkProps = {
  href: string;
  children: string | React.ReactNode;
  className?: string;
  activeClassName?: string;
};

export const Link = ({ href, children, className = '', activeClassName = '' }: LinkProps) => {
  const router = useRouter();
  const routerSlugBase = router.asPath.split('/').filter((item) => item)[0];
  const hrefSlugBase = href.split('/').filter((item) => item)[0];
  const isPartiallyActive = routerSlugBase === hrefSlugBase;

  return (
    <NextLink href={href}>
      <a className={`inline-block ${className} ${router.asPath === href || isPartiallyActive ? activeClassName : ''}`}>
        {children}
      </a>
    </NextLink>
  );
};
