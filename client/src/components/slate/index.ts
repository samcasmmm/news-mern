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


export const CodeElement = (props) => (
   <pre {...props.attributes} className="bg-[#202020] text-white">
     <code>{props.children}</code>
   </pre>
 )