import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import Prism from 'prism-react-renderer/prism';

(typeof global !== 'undefined' ? global : window).Prism = Prism;

require('prismjs/components/prism-php');
require('prismjs/components/prism-twig');

interface SyntaxHighlighterProps {
  children: { props: { children: string; className: string } };
}

export const SyntaxHighlighter = ({ children }: SyntaxHighlighterProps) => {
  const { children: code, className: languageRaw } = children.props;
  const language = languageRaw?.replace('language-', '').trim() as Language;

  return (
    <Highlight {...defaultProps} theme={theme} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="-mx-6 md:-mx-10 lg:-mx-24">
          <pre
            className={`!rounded-none prose:!rounded overflow-x-auto scrollbar scrollbar-thin scrollbar scrollbar-thumb-gray-600 hover:scrollbar-thumb-gray-500 ${className}`}
            style={{ ...style }}
          >
            <code className="inline-block min-w-full">
              {tokens.slice(0, -1).map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  <span className="inline-block opacity-30 w-8">{i + 1}</span>
                  <span>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        </div>
      )}
    </Highlight>
  );
};
