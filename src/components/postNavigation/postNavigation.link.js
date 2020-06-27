import React from 'react';

import IconArrowLeft from '../../assets/icon--arrow--left.svg';
import IconArrowRight from '../../assets/icon--arrow--right.svg';

const PostNavigationLink = ({
  title, slug, next, previous, type,
}) => {
  switch (type) {
    case 'portfolio':
      type = 'showcase';
      break;
    case 'snippets':
      type = 'snippet';
      break;
    default:
      type = 'post';
  }

  return (
    <a className="post-navigation__link" href={slug} title={next ? `Go to next ${type}` : `Go to previous ${type}`} aria-label={next ? `Go to next ${type}` : `Go to previous ${type}`}>
      <div className="post-navigation__content">
        <span className="post-navigation__indicator">
          {previous && <IconArrowLeft />}
          <span>{next ? `Next ${type}` : `Previous ${type}`}</span>
          {next && <IconArrowRight />}
        </span>
        <h2 className="post-navigation__title">{title}</h2>
      </div>
    </a>
  );
};

export default PostNavigationLink;
