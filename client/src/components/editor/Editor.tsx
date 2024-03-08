import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button } from '..';

const Editor = () => {
  const [value, setValue] = useState('');

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <div className="my-4 w-3/6">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={{
            toolbar: {
              container: [
                [{ header: [1, 2, 3, 4, 5, 6, false] }, { font: [] }],
                [{ size: [] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [
                  { list: 'ordered' },
                  { list: 'bullet' },
                  { indent: '-1' },
                  { indent: '+1' },
                ],
                [{ align: [] }],
                ['link', 'image', 'video'],
                ['clean'],
              ],
            },
          }}
        />
      </div>
      <Button>Submit</Button>
    </div>
  );
};

export default Editor;
