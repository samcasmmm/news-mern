import React from 'react';

type Props = any;
// const CodeElement = (props) => (
//    <pre {...props.attributes} className="bg-[#202020] text-white">
//      <code>{props.children}</code>
//    </pre>
//  );

const CodeElement = (props: Props) => {
  return (
    <pre {...props.attributes} className="bg-[#202020] text-white">
      <code>{props.children}</code>
    </pre>
  );
};

export default CodeElement;
