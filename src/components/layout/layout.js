import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import Header from '../header/header';
import Footer from '../footer/footer';
import Code from '../../utils/code';

import './layout.scss';

// eslint-disable-next-line consistent-return
function preToCodeBlock(preProps) {
  if (
    // children is code element
    preProps.children
    // code props
    && preProps.children.props
    // if children is actually a <code>
    && preProps.children.props.mdxType === 'code'
  ) {
    // we have a <pre><code> situation
    const {
      children,
      className = '',
      ...props
    } = preProps.children.props;

    const matches = className.match(/language-(?<lang>.*)/);

    return {
      children: children.trim(),
      className,
      language:
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : '',
      ...props,
    };
  }
}

const components = {
  pre: (preProps) => {
    const props = preToCodeBlock(preProps);

    if (props) {
      return <Code {...props} />;
    }
    return <pre {...preProps} />;
  },
};

const Layout = ({ className, children }) => (
  <>
    <div className="sticky-footer">
      <Header />
      <MDXProvider components={components}>
        <main className={className}>{children}</main>
      </MDXProvider>
      <Footer />
    </div>
  </>
);

export default Layout;
