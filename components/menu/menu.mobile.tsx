import { mainMenuLinks } from '../../constants/mainMenuLinks';
import { Container } from '../container/container';
import { Logo } from '../logo/logo';
import { MenuLink } from './menu.link';

interface MenuMobileProps {
  isMenuOpen: boolean;
  handleMenuToggle(): void;
}

interface MenuMobileBaseProps extends MenuMobileProps {
  children: React.ReactNode;
}

const MenuMobileBase = ({ isMenuOpen, children, handleMenuToggle }: MenuMobileBaseProps): JSX.Element => {
  const handleOutsideClick = (event: MouseEvent): void => {
    const { target } = event;

    if ((target as HTMLElement).id === 'menuMobileBackdrop') {
      handleMenuToggle();
    }
  };

  if (isMenuOpen) window.addEventListener('click', handleOutsideClick);

  return (
    <div
      className={`fixed inset-0 z-10 overflow-y-auto lg:hidden ${!isMenuOpen ? 'invisible' : ''}`}
      aria-hidden={!isMenuOpen}
    >
      <div className="fixed inset-0 bg-gray-500 opacity-75 dark:bg-gray-800"></div>
      <div
        id="menuMobileBackdrop"
        className={`relative flex min-h-screen transform flex-col pb-20 transition duration-150 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div id="menuMobileBase" className="rounded-b-lg bg-white shadow-xl dark:bg-neutral-900">
          {children}
        </div>
      </div>
    </div>
  );
};

const MenuMobileHeader = (): JSX.Element => {
  return (
    <div className="mb-6">
      <Container className="border-b border-gray-200 py-8 dark:border-neutral-800">
        <Logo />
      </Container>
    </div>
  );
};

const MenuMobileLinks = (): JSX.Element => {
  return (
    <Container>
      <ul className="grid grid-cols-1 pb-8">
        {mainMenuLinks.map(({ label, url }) => (
          <li key={url}>
            <MenuLink link={url}>{label}</MenuLink>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export const MenuMobile = ({ isMenuOpen, handleMenuToggle }: MenuMobileProps): JSX.Element => {
  return (
    <MenuMobileBase isMenuOpen={isMenuOpen} handleMenuToggle={handleMenuToggle}>
      <MenuMobileHeader />
      <MenuMobileLinks />
    </MenuMobileBase>
  );
};
