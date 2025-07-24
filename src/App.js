import React, { useState } from "react";
import RawInputArea from "./components/RawInputArea";
import MarkdownSanitized from "./components/MarkdownSanitized";
import MarkdownHelpBox from "./components/MarkdownHelpBox";
import { MarkDownProvider } from "./context/markDownContext";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showHelp, setShowHelp] = useState(false); // 👈 Help sidebar toggle

  return (
    <MarkDownProvider>
      <div className={`${darkMode ? "dark" : ""}`}>
        <div className="h-screen flex flex-col bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
          
          {/* Header */}
          <header className="bg-blue-600 dark:bg-blue-800 text-white text-2xl font-bold px-6 py-4 shadow-md flex justify-between items-center">
            <span>MarkiFy✍️</span>

            <div className="flex gap-2">
              <button
                onClick={() => setShowHelp((prev) => !prev)}
                className="px-2 py-1 bg-green-500 hover:bg-green-600 text-white rounded transition"
              >
                {showHelp ? "Close Help ❌" : "Help Book 📘"}
              </button>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="px-3 py-1 bg-gray-300 hover:bg-gray-400 text-black rounded transition"
              >
                {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
              </button>
            </div>
          </header>

          {/* Content */}
          <main className="flex flex-1 overflow-hidden">
            <RawInputArea />
            <MarkdownSanitized />
            {showHelp && <MarkdownHelpBox />} {/* 👈 Conditional sidebar */}
          </main>
        </div>
      </div>
    </MarkDownProvider>
  );
};

export default App;
