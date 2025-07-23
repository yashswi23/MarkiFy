
// import React, { useContext } from "react";
// import { markDownContext } from "../context/markDownContext";

// const RawInputArea = () => {
//   const { rawText, handleChangeRawInputedText } = useContext(markDownContext);

//   // Reset Markdown Handler
//   const handleReset = () => {
//     localStorage.removeItem("markdown_text"); // Clear localStorage
//     window.location.reload(); // Reload page to reset to default
//   };

//   return (
//     <div className="flex-1 p-6">
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="text-xl font-semibold">Enter Markdown</h3>
//         <button
//           onClick={handleReset}
//           className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
//         >
//           Reset
//         </button>
//       </div>

//       <textarea
//         className="w-full h-[80vh] p-4 text-lg border rounded-lg shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
//         value={rawText}
//         onChange={(e) => handleChangeRawInputedText(e.target.value)}
//         placeholder="Type your Markdown here..."
//       />
//     </div>
//   );
// };

// export default RawInputArea;


import React, { useContext } from "react";
import { markDownContext } from "../context/markDownContext";

const RawInputArea = () => {
  const { rawText, handleChangeRawInputedText } = useContext(markDownContext);

  // Reset Editor
  const handleReset = () => {
    localStorage.removeItem("markdown_text");
    handleChangeRawInputedText(""); // Clear editor
  };

  // Load Sample Markdown
  const handleLoadSample = () => {
    const sampleText = `# Sample Markdown\n\nThis is a **test markdown** content.\n\n- Item 1\n- Item 2\n\n> Blockquote example.\n\n\`\`\`javascript\nconsole.log("Hello World");\n\`\`\``;
    handleChangeRawInputedText(sampleText);
  };

  // Copy to Clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(rawText);
    alert("Markdown copied to clipboard!");
  };

  // Download as .md file
  const handleDownload = () => {
  const blob = new Blob([rawText], { type: "text/markdown;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "markdown.md";
  link.click();
  URL.revokeObjectURL(link.href); // Clean up memory
  };

  return (
    <div className="flex-1 p-6 border-r border-gray-300 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Markdown Input</h3>
        <div className="flex gap-2">
          <button
            onClick={handleLoadSample}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Load Sample
          </button>
          <button
            onClick={handleCopy}
            className="px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600"
          >
            Copy
          </button>
          <button
            onClick={handleDownload}
            className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Download
          </button>
          <button
            onClick={handleReset}
             className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 dark:hover:bg-red-400"
          >
            Reset
          </button>
        </div>
      </div>

      <textarea
     className="w-full h-[75vh] p-4 text-lg border rounded-lg shadow-sm resize-none 
             bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
             focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={rawText}
        onChange={(e) => handleChangeRawInputedText(e.target.value)}
        placeholder="Type your Markdown here..."
      />
    </div>
  );
};

export default RawInputArea;




