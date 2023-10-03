import React, { useCallback, useState } from 'react';
import { createEditor, BaseEditor } from 'slate';
import { Slate, Editable, withReact, ReactEditor } from 'slate-react';

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

type CustomElement = { type: 'paragraph'; children: CustomText[] };
type CustomText = { text: string };

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
];

const CodeElement = (props) => (
  <pre {...props.attributes} className="bg-[#202020] text-white">
    <code>{props.children}</code>
  </pre>
);
const DefaultElement = (props) => <p {...props.attributes}>{props.children}</p>;

const Leaf = (props) => (
  <span {...props.attributes} className={props.leaf.bold ? 'bold' : 'normal'}>
    {props.children}
  </span>
);

const CreateNew = () => {
  const [editor] = useState(() => withReact(createEditor()));

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

  return (
    <div>
      <div className="m-4 h-screen bg-white p-4">
        <Slate
          editor={editor}
          initialValue={initialValue}
          onChange={(value) => {
            const isAstChange = editor.operations.some(
              (op) => 'set_selection' !== op.type,
            );
            if (isAstChange) {
              const content = JSON.stringify(value);
              localStorage.setItem('content', content);
            }
          }}
        >
          <Editable />
        </Slate>
      </div>
    </div>
  );
};

export default CreateNew;
