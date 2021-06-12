import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import Prism from 'prism-react-renderer/prism';

import theme from 'prism-react-renderer/themes/github';

(typeof global !== 'undefined' ? global : window).Prism = Prism;

require('prismjs/components/prism-rust');
require('prismjs/components/prism-solidity');

const Code = ({ codeString, language, ...props }: any) => {
  return (
    <Highlight {...defaultProps} code={codeString} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="gatsby-highlight" data-language={language}>
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <>
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={i} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              </>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
};

export default Code;
