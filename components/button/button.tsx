import { isExternalLink } from '../../utils/isExternalLink';
import { ButtonExternal } from './button.external';
import { ButtonInternal } from './button.internal';
import { ButtonPlain } from './button.plain';

interface ButtonProps {
  accentColor?: 'primary' | 'secondary';
  children: string | React.ReactNode;
  className?: string;
  link?: string;
  onClick?(): void;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export const Button = ({
  accentColor = 'primary',
  children,
  className = '',
  link,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick = (): void => {},
  type = 'button',
}: ButtonProps): JSX.Element => {
  const buttonTypeMapping = {
    primary: 'blue',
    secondary: 'blue',
  };

  const elementClasses = [
    `inline-flex justify-center w-full sm:w-auto items-center px-8 py-4 border font-semibold rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150 text-lg leading-7 ${className}`,
  ];

  if (accentColor === 'secondary') {
    elementClasses.push(
      `border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-${buttonTypeMapping[accentColor]}-500`
    );
  } else {
    elementClasses.push(
      `bg-${buttonTypeMapping[accentColor]}-600 hover:bg-${buttonTypeMapping[accentColor]}-500 active:bg-${buttonTypeMapping[accentColor]}-700 border-transparent focus:ring-${buttonTypeMapping[accentColor]}-500`
    );
  }

  if (typeof link === 'string' && link.length > 0) {
    if (isExternalLink(link)) {
      return (
        <ButtonExternal link={link} className={elementClasses.join(' ')}>
          {children}
        </ButtonExternal>
      );
    }

    return (
      <ButtonInternal link={link} className={elementClasses.join(' ')}>
        {children}
      </ButtonInternal>
    );
  }

  return (
    <ButtonPlain type={type} onClick={onClick} className={elementClasses.join(' ')}>
      {children}
    </ButtonPlain>
  );
};
