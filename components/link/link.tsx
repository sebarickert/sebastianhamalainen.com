import { useRouter } from 'next/router';
import NextLink from 'next/link';

type LinkProps = {
  href: string;
  children: string | React.ReactNode;
  className?: string;
  activeClassName?: string;
};

export const Link = ({ href, children, className = '', activeClassName = '' }: LinkProps) => {
  const { asPath, pathname } = useRouter();
  const routerSlugBase = asPath.split('/').filter((item) => item)[0];
  const hrefSlugBase = href.split('/').filter((item) => item)[0];
  const isPartiallyActive = routerSlugBase === hrefSlugBase;

  const isLinkActive = asPath === href || pathname === href || isPartiallyActive;

  return (
    <NextLink href={href}>
      <a className={`inline-block ${className} ${isLinkActive ? activeClassName : ''}`}>{children}</a>
    </NextLink>
  );
};
