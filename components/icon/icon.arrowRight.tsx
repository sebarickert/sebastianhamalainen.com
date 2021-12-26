import { IconElementProps } from './icon';
import { IconSvgBase } from './icon.svgBase';

export const IconArrowRight = ({ className = '' }: IconElementProps): JSX.Element => {
  return (
    <IconSvgBase className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </IconSvgBase>
  );
};
