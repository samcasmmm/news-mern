import { useState, useRef, ChangeEvent } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button } from '..';

const Editor = () => {
  const [value, setValue] = useState('');
  const quillRef = useRef();

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(
        'https://api.cloudinary.com/v1_1/esea5nri/image/upload',
        {
          method: 'POST',
          body: formData,
        },
      );

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const result = await response.json();
      return result.secure_url;
    } catch (error) {
      console.error('Error:', error);
      throw new Error('Upload failed');
    }
  };

  const handleUploadImage = async () => {
    try {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.click();

      input.onchange = async (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        const file = target.files?.[0];
        if (!file) return;

        const imageUrl = await uploadImage(file);

        const quill = quillRef.current?.getEditor();
        if (!quill) return;

        const range = quill.getSelection(true);
        quill.insertEmbed(range?.index || 0, 'image', imageUrl);
      };
    } catch (error: any) {
      console.error('Error:', error);
    }
  };

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
          ref={quillRef}
        />
      </div>
      <Button onClick={handleUploadImage}>Upload Image</Button>
    </div>
  );
};

export default Editor;
