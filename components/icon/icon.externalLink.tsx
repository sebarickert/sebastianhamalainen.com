import { IconElementProps } from './icon';
import { IconSvgBase } from './icon.svgBase';

export const IconExternalLink = ({ className = '' }: IconElementProps): JSX.Element => {
  return (
    <IconSvgBase className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </IconSvgBase>
  );
};
