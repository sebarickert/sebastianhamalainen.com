import { mainMenuLinks } from '../../constants/mainMenuLinks';
import { MenuLink } from './menu.link';

interface MenuDesktopBase {
  children: React.ReactNode;
}

const MenuDesktopBase = ({ children }: MenuDesktopBase): JSX.Element => {
  return <div className={`hidden lg:-mr-4 lg:block`}>{children}</div>;
};

const MenuDesktopLinks = (): JSX.Element => {
  return (
    <ul className={`flex gap-2`}>
      {mainMenuLinks.map(({ label, url }) => (
        <li key={url}>
          <MenuLink link={url}>{label}</MenuLink>
        </li>
      ))}
    </ul>
  );
};

export const MenuDesktop = (): JSX.Element => {
  return (
    <MenuDesktopBase>
      <MenuDesktopLinks />
    </MenuDesktopBase>
  );
};
