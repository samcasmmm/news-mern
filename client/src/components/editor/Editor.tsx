import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button } from '@/components/';
const Editor = () => {
  const [value, setValue] = useState('');

  const imageHandler = async () => {
    const input = document.createElement('input');

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    input.onchange = async () => {
      const file = input && input.files ? input.files[0] : null;

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => {
        const base64Image = reader.result;

        localStorage.setItem('image', base64Image);
        const formData = new FormData();
        formData.append('file', file);
        const quillObj = quillRef.current.getEditor();
        await UploadService.uploadFile(formData)
          .then((res) => {
            const data = get(res, 'data.data.url');
            const range = quillObj.getEditorSelection();
            quillObj.getEditor().insertEmbed(range.index, 'image', data);
          })
          .catch((err) => {
            console.log(err);
            return false;
          });
      };
    };
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <div className="my-4 w-3/6">
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </div>
      <Button onClick={() => console.log(value)}>Click</Button>
    </div>
  );
};

export default Editor;
