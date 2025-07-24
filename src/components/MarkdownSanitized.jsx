
// import React, { useContext } from "react";
// import { markDownContext } from "../context/markDownContext";

// const MarkdownSanitized = () => {
//   const { getMarkDownAsHTMLOutput } = useContext(markDownContext);

//   return (
//     <div className="flex-1 p-6 bg-white overflow-y-auto">
//       <h3 className="text-xl font-semibold mb-4">Markdown Preview</h3>
//       <div
//          className="prose prose-lg max-w-none border p-4 rounded-lg 
//              bg-gray-50 dark:bg-gray-800 dark:prose-invert 
//              min-h-[75vh] shadow-sm"
//         dangerouslySetInnerHTML={{ __html: getMarkDownAsHTMLOutput() }}
//       />
//     </div>
//   );
// };

// export default MarkdownSanitized;

import React, { useContext } from "react";
import { markDownContext } from "../context/markDownContext";

const MarkdownSanitized = () => {
  const { getMarkDownAsHTMLOutput } = useContext(markDownContext);

  return (
    <div className="flex-1 p-6 bg-white dark:bg-[#1e1e2f] overflow-y-auto">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        Markdown Preview
      </h3>

      <div
        className="prose prose-lg max-w-none border p-4 rounded-lg bg-gray-50 
                   dark:bg-gray-800 dark:prose-invert min-h-[75vh] shadow-sm"
        dangerouslySetInnerHTML={{ __html: getMarkDownAsHTMLOutput() }}
      />
    </div>
  );
};

export default MarkdownSanitized;

