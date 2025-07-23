import React, { useState } from "react";
import RawInputArea from "./components/RawInputArea";
import MarkdownSanitized from "./components/MarkdownSanitized";
import { MarkDownProvider } from "./context/markDownContext";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <MarkDownProvider>
      <div className={`${darkMode ? "dark" : ""}`}>
        <div className="h-screen flex flex-col bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
          {/* Header */}
          <header className="bg-blue-600 dark:bg-blue-800 text-white text-2xl font-bold px-6 py-4 shadow-md flex justify-between items-center">
            <span>MarkiFy✍️</span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-1 bg-gray-300 hover:bg-gray-400 text-white rounded transition"
            >
              {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
            </button>
          </header>

          {/* Content */}
          <main className="flex flex-1 overflow-hidden">
            <RawInputArea />
            <MarkdownSanitized />
          </main>
        </div>
      </div>
    </MarkDownProvider>
  );
};

export default App;
