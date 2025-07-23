// import React, { useContext } from 'react'
// import { markDownContext } from "../context/markDownContext";
// const MarkdownSanitized = () => {
//     const {getMarkdownAshtmloutput} = useContext(markDownContext);
//   return (
//     <div className='flex-1 p-6 bg-white border-l border-gray-300'>
//         <h3 className='text-xl font-semibold mb-4'>MarkdownOutput</h3>
//         <div
//         className="prose prose-lg max-w-none border p-4 rounded-lg bg-gray-50 min-h-[80vh] shadow-sm"
//         dangerouslySetInnerHTML={{ __html: getMarkdownAshtmloutput() }}
//       />
      
//     </div>
//   )
// }

// export default MarkdownSanitized

import React, { useContext } from "react";
import { markDownContext } from "../context/markDownContext";

const MarkdownSanitized = () => {
  const { getMarkDownAsHTMLOutput } = useContext(markDownContext);

  return (
    <div className="flex-1 p-6 bg-white overflow-y-auto">
      <h3 className="text-xl font-semibold mb-4">Markdown Preview</h3>
      <div
         className="prose prose-lg max-w-none border p-4 rounded-lg 
             bg-gray-50 dark:bg-gray-800 dark:prose-invert 
             min-h-[75vh] shadow-sm"
        dangerouslySetInnerHTML={{ __html: getMarkDownAsHTMLOutput() }}
      />
    </div>
  );
};

export default MarkdownSanitized;
