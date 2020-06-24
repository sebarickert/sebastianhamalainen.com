import React from 'react';

import Image from '../../../utils/image';
import './image.scss';

const WidgetImage = ({
  children, src, alt, contain,
}) => {
  const filename = src.replace(/^.*[\\/]/, '');

  return (
    <figure className={`widget widget--image ${contain ? 'contain' : ''}`}>
      <Image className="widget__image" src={filename} alt={alt || ''} />
      {children ? <figcaption className="widget__image-caption">{children}</figcaption> : ''}
    </figure>
  );
};
export default WidgetImage;
