import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button } from '@/components/';
const Editor = () => {
  const [value, setValue] = useState('');
  // const quillRef = useRef('');

  // const imageHandler = async () => {
  //   const input = document.createElement('input');

  //   input.setAttribute('type', 'file');
  //   input.setAttribute('accept', 'image/*');
  //   input.click();
  //   input.onchange = async () => {
  //     const file = input && input.files ? input.files[0] : null;

  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = async () => {
  //       const base64Image = reader.result;

  //       localStorage.setItem('image', base64Image);
  //       const formData = new FormData();
  //       formData.append('file', file);
  //       const quillObj = quillRef.current.getEditor();
  //       // await UploadService.uploadFile(formData)
  //       //   .then((res) => {
  //       //     const data = get(res, 'data.data.url');
  //       //     const range = quillObj.getEditorSelection();
  //       //     quillObj.getEditor().insertEmbed(range.index, 'image', data);
  //       //   })
  //       //   .catch((err) => {
  //       //     console.log(err);
  //       //     return false;
  //       //   });
  //     };
  //   };
  // };

  // const modules = {
  //   toolbar: {
  //     container: [
  //       [{ header: [1, 2, 3, 4, 5, 6, false] }, { font: [] }],
  //       [{ size: [] }],
  //       ['bold', 'italic', 'underline', 'strike', 'blockquote'],
  //       [
  //         { list: 'ordered' },
  //         { list: 'bullet' },
  //         { indent: '-1' },
  //         { indent: '+1' },
  //       ],
  //       ['link', 'image', 'video'],
  //       ['clean'],
  //       [{ align: [] }],
  //     ],
  //     handlers: {
  //       image: imageHandler,
  //     },
  //   },
  //   clipboard: {
  //     matchVisual: false,
  //   },
  //   imageResize: {
  //     parchment: Quill.import('parchment'),
  //     modules: ['Resize', 'DisplaySize'],
  //   },
  // };

  const modules = {
    // #3 Add "image" to the toolbar
    toolbar: [['bold', 'italic', 'image']],
    hanimageUploader: {
      upload: (file: File) => {
        return new Promise((resolve, reject) => {
          const formData = new FormData();
          formData.append('image', file);

          fetch('https://api.cloudinary.com/v1_1/demo/image/upload', {
            method: 'POST',
            body: formData,
          })
            .then((response) => response.json())
            .then((result) => {
              console.log(result);
              resolve(result.data.url);
            })
            .catch((error) => {
              reject('Upload failed');
              console.error('Error:', error);
            });
        });
      },
    },
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <div className="my-4 w-3/6">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
        />
      </div>
      <Button onClick={() => console.log(value)}>Click</Button>
      <p>{value}</p>
    </div>
  );
};

export default Editor;
