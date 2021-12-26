import Link from 'next/link';
import { Container } from '../container/container';
import { Logo } from '../logo/logo';
import { Menu } from '../menu/menu';

export const Header = (): JSX.Element => (
  <header className="bg-white z-10 relative">
    <Container className="py-8 lg:py-12 flex justify-between items-center">
      <Link href="/">
        <a className="inline-flex focus:outline-none focus:ring ring-offset-2 rounded">
          <Logo />
        </a>
      </Link>
      <Menu />
    </Container>
  </header>
);
