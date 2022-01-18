import { IconArrowLeft } from './icon.arrowLeft';
import { IconArrowRight } from './icon.arrowRight';
import { IconMoon } from './icon.moon';
import { IconPencil } from './icon.pencil';
import { IconSun } from './icon.sun';

export type IconName = 'arrow-left' | 'arrow-right' | 'pencil' | 'external-link' | 'moon' | 'sun';

interface IconProps {
  type: IconName;
  className?: string;
}

export interface IconElementProps {
  className?: string;
}

export const Icon = ({ type, className = '' }: IconProps): JSX.Element => {
  let defaultIconClasses = 'h-6 w-6';

  if (className) {
    defaultIconClasses = `${defaultIconClasses} ${className}`;
  }

  switch (type) {
    case 'arrow-left':
      return <IconArrowLeft className={defaultIconClasses} />;

    case 'arrow-right':
      return <IconArrowRight className={defaultIconClasses} />;

    case 'pencil':
      return <IconPencil className={defaultIconClasses} />;

    case 'external-link':
      return <IconPencil className={defaultIconClasses} />;

    case 'moon':
      return <IconMoon className={defaultIconClasses} />;

    case 'sun':
      return <IconSun className={defaultIconClasses} />;

    default:
      break;
  }

  return <div />;
};
