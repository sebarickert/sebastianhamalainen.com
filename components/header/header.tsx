import Link from 'next/link';
import { Container } from '../container/container';
import { Logo } from '../logo/logo';
import { Menu } from '../menu/menu';
import { ThemeSwitcher } from '../theme-switcher/theme-switcher';

export const Header = (): JSX.Element => (
  <header className="relative z-10 bg-white dark:bg-neutral-900">
    <Container className="flex items-center justify-between py-8 lg:py-12">
      <Link href="/">
        <a className="mr-auto inline-flex rounded ring-offset-2 focus:outline-none focus:ring">
          <Logo />
        </a>
      </Link>
      <Menu />
      <ThemeSwitcher />
    </Container>
  </header>
);
