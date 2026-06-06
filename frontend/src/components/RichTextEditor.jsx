// import { useQuill } from 'react-quilljs';
// import 'quill/dist/quill.snow.css';

// const RichTextEditor = ({input, setInput}) => {
//   const handleChange = (content) => {
//     setInput({...input, description:content})
//   }
  
//   const { quill, quillRef } = useQuill();
//   return <div ref={quillRef} onChange={handleChange} />;
// };
// export default RichTextEditor 

import { useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

const RichTextEditor = ({ input, setInput }) => {
  const { quill, quillRef } = useQuill();

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        setInput((prev) => ({
          ...prev,
          description: quill.getText().trim(),
        }));
      });
    }
  }, [quill, setInput]);

  return <div ref={quillRef} />;
};

export default RichTextEditor;