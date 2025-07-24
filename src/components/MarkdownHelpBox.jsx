import React from "react";

const MarkdownHelpBox = () => {
  const commands = [
    {
      title: "Bold",
      syntax: "**bold text**",
      output: "**bold text**",
    },
    {
      title: "Italic",
      syntax: "*italic text*",
      output: "*italic text*",
    },
    {
      title: "Strikethrough",
      syntax: "~~strikethrough~~",
      output: "~~strikethrough~~",
    },
    {
      title: "Heading 1 to 6",
      syntax: "# H1\n## H2\n### H3",
      output: "# H1 → H6",
    },
    {
      title: "Blockquote",
      syntax: "> Blockquote",
      output: "> Blockquote",
    },
    {
      title: "Code Inline",
      syntax: "`inline code`",
      output: "`inline code`",
    },
    {
      title: "Code Block",
      syntax: "```js\nconsole.log('Hello');\n```",
      output: "code block",
    },
    {
      title: "Link",
      syntax: "[OpenAI](https://openai.com)",
      output: "[OpenAI](https://openai.com)",
    },
    {
      title: "Image",
      syntax: "![alt text](image-url)",
      output: "image embedded",
    },
    {
      title: "List",
      syntax: "- Item 1\n- Item 2",
      output: "unordered list",
    },
    {
      title: "Numbered List",
      syntax: "1. First\n2. Second",
      output: "ordered list",
    },
    {
      title: "Horizontal Rule",
      syntax: "---",
      output: "horizontal line",
    },
    {
      title: "Task List",
      syntax: "- [x] Task 1\n- [ ] Task 2",
      output: "checkboxes",
    },
  ];

  return (
    <div className="h-full max-h-[80vh] overflow-y-auto pr-2">
      <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">
        🧠 Markdown Quick Guide
      </h2>
      <div className="space-y-4">
        {commands.map((cmd, idx) => (
          <div
            key={idx}
            className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-gray-800 dark:border-blue-400 rounded-md shadow-sm"
          >
            <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-1">
              {cmd.title}
            </h3>
            <p className="text-sm">
              <span className="font-medium text-gray-700 dark:text-gray-300">
                Syntax:
              </span>{" "}
              <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-blue-700 dark:text-blue-300">
                {cmd.syntax}
              </code>
            </p>
            <p className="text-sm">
              <span className="font-medium text-gray-700 dark:text-gray-300">
                Output:
              </span>{" "}
              <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-green-700 dark:text-green-300">
                {cmd.output}
              </code>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarkdownHelpBox;
