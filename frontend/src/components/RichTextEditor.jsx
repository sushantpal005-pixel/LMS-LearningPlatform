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

// import { useEffect } from "react";
// import { useQuill } from "react-quilljs";
// import "quill/dist/quill.snow.css";

// const RichTextEditor = ({ input, setInput }) => {
//   const { quill, quillRef } = useQuill();

//   useEffect(() => {
//     if (quill) {
//       quill.on("text-change", () => {
//         setInput((prev) => ({
//           ...prev,
//           description: quill.getText().trim(),
//         }));
//       });
//     }
//   }, [quill, setInput]);

//   return <div ref={quillRef} />;
// };

// export default RichTextEditor;

import { useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

const RichTextEditor = ({ input, setInput }) => {
  const { quill, quillRef } = useQuill({
    theme: "snow",
  });

  // Update state when editor content changes
  useEffect(() => {
    if (!quill) return;

    const handleTextChange = () => {
      setInput((prev) => ({
        ...prev,
        description: quill.root.innerHTML,
      }));
    };

    quill.on("text-change", handleTextChange);

    return () => {
      quill.off("text-change", handleTextChange);
    };
  }, [quill, setInput]);

  // Populate editor when data is fetched
  useEffect(() => {
    if (!quill) return;

    const currentContent = quill.root.innerHTML;

    if (
      input.description &&
      currentContent !== input.description
    ) {
      quill.root.innerHTML = input.description;
    }
  }, [quill, input.description]);

  return (
    <div
      ref={quillRef}
      
    />
  );
};

export default RichTextEditor;