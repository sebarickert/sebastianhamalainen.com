import React from "react";
import theme from "prism-react-renderer/themes/nightOwl";
import Highlight, { defaultProps } from "prism-react-renderer";

interface CodeProps {
  children: string;
  className: string;
}

const Code = ({ children, className }: CodeProps): JSX.Element => {
  const language = className.replace(/language-/, "") || "";

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language as never}
      theme={theme}
    >
      {({ style, tokens, getLineProps, getTokenProps }): JSX.Element => (
        <div className="overflow-auto -mx-6 md:-mx-10 lg:-mx-12">
          <pre className="float-left min-w-full" style={style}>
            {tokens.map((line, i) => (
              <div
                key={i}
                {...getLineProps({
                  line,
                  key: i,
                })}
              >
                <span className="inline-block opacity-30 w-8">{i + 1}</span>
                {line.map((token, key) => (
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
