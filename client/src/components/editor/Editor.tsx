import { useRef, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button } from '@/components/';
const Editor = () => {
  const [value, setValue] = useState('');
  const quillRef = useRef('');

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

        const formData = new FormData();
        formData.append('file', file);
        try {
          const response = await fetch(
            'https://api.cloudinary.com/v1_1/your_cloud_name/image/upload',
            {
              method: 'POST',
              body: formData,
            },
          );
          if (!response.ok) {
            throw new Error('Failed to upload image to Cloudinary');
          }
          const data = await response.json();
          const imageURL = data.secure_url; // Get the secure URL of the uploaded image
          const quillObj = quillRef.current.getEditor();
          const range = quillObj.getEditorSelection();
          quillObj.getEditor().insertEmbed(range.index, 'image', imageURL);
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      };
    };
  };

  const modules = {
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
        ['link', 'image', 'video'],
        ['clean'],
        [{ align: [] }],
      ],
      handlers: {
        image: imageHandler,
      },
    },
    clipboard: {
      matchVisual: false,
    },
    imageResize: {
      parchment: Quill.import('parchment'),
      modules: ['Resize', 'DisplaySize'],
    },
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <div className="my-4 w-3/6">
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </div>
      <Button onClick={() => console.log(value)}>Click</Button>
      <p>{value}</p>
    </div>
  );
};

export default Editor;
