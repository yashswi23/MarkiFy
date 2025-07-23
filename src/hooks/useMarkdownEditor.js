import { useState, useEffect } from "react";
import Remarkable from "remarkable"; // Default import

export default function useMarkdownEditor() {
  const md = new Remarkable({ html: true, linkify: true });

  const [rawText, setRawText] = useState(
    localStorage.getItem("markdown_text") ||
      "# Hi! Welcome To MarkDown Editor Tool\n\nHello!, **Everyone** "
  );

  const handleChangeRawInputedText = (newText) => setRawText(newText);

  const getMarkDownAsHTMLOutput = () => md.render(rawText);

  useEffect(() => {
    localStorage.setItem("markdown_text", rawText);
  }, [rawText]);

  return { rawText, handleChangeRawInputedText, getMarkDownAsHTMLOutput };
}
