import React from 'react';
import theme from 'prism-react-renderer/themes/nightOwl';
import Highlight, { defaultProps } from 'prism-react-renderer';

import '../scss/base/code.scss';

const Code = ({ children, className }) => {
  const language = className ? className.replace(/language-/, '') : '';

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={theme}
    >
      {({
        // eslint-disable-next-line no-shadow
        className, style, tokens, getLineProps, getTokenProps,
      }) => (
        <div className="code-block">
          <pre className={`${className} code-block__pre`} style={style}>
            {tokens.map((line, i) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                {...getLineProps({
                  line,
                  key: i,
                  className: 'code-block__line',
                })}
              >
                <span className="code-block__line-number">
                  {i + 1}
                </span>
                {line.map((token, key) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
};

export default Code;
