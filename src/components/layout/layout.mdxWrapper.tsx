import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import Code from "../../utils/code";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Language } from "prism-react-renderer";

interface LayoutMdxWrapperProps {
  children: React.ReactNode;
}

interface PreToCodeBlock {
  children: string;
  className: string;
  language: Language;
}

interface PreProps {
  children: {
    props: {
      children: string;
      mdxType: string;
      className: string;
    };
  };
}

const preToCodeBlock = (preProps: PreProps): PreToCodeBlock | undefined => {
  if (
    preProps?.children?.props?.mdxType &&
    preProps.children.props.mdxType === "code"
  ) {
    const { children, className = "", ...props } = preProps.children.props;

    const matches = className.match(/language-(?<lang>.*)/);
    const language = (matches && matches.groups?.lang) || "bash";

    return {
      children: children.trim(),
      className,
      language: language as never,
      ...props,
    };
  }
};

const components = {
  // eslint-disable-next-line react/display-name
  pre: (preProps: PreProps): JSX.Element => {
    const props = preToCodeBlock(preProps);

    if (props) {
      return <Code {...props} />;
    }

    return (
      <pre
        {...(preProps as DetailedHTMLProps<
          HTMLAttributes<HTMLPreElement>,
          HTMLPreElement
        >)}
      />
    );
  },
};

const LayoutMdxWrapper = ({ children }: LayoutMdxWrapperProps): JSX.Element => (
  <MDXProvider components={components}>
    <main>{children}</main>
  </MDXProvider>
);

export default LayoutMdxWrapper;
