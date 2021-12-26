import { IconArrowLeft } from './icon.arrowLeft';
import { IconArrowRight } from './icon.arrowRight';
import { IconPencil } from './icon.pencil';

export type IconName = 'arrow-left' | 'arrow-right' | 'pencil' | 'external-link';

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

    default:
      break;
  }

  return <div />;
};
