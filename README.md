# Markify – Live Markdown Editor ✍️

Markify is a **beautiful and responsive live Markdown editor** built with **React**, **Tailwind CSS**, and the **Remarkable** library.  
It allows you to write Markdown on one side and preview the rendered content on the other side — **in real time**.

---

## 🚀 Features
- **Live Markdown Preview** (Side-by-side view)
- **Dark Mode Toggle** 🌙
- **Load Sample Markdown** (One-click test content)
- **Copy to Clipboard** 📋
- **Download as `.md` File**
- **Auto Save with localStorage** (Never lose your text)
- **Word & Character Counter** (Optional)
- **Responsive Design** (Mobile & Desktop friendly)

---

## 📸 Screenshots
![Screenshot 1](./screenshots/download.png)
![Screenshot 2](./screenshots/d2.png)

---

## 🛠️ Tech Stack
- **React** (Functional components + Hooks)
- **Tailwind CSS** (Version 3.4 – before 2025 updates)
- **Remarkable** (Markdown parsing)
- **Context API** (Global state management)
- **LocalStorage** (Auto-save data)

---

## 📦 Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/yashswi23/markify.git
   cd markify
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the project**
   ```bash
   npm start
   ```

---

## ⚙️ Folder Structure
```
src/
 ├── components/
 │   ├── RawInputArea.jsx
 │   ├── MarkdownSanitized.jsx
 ├── context/
 │   ├── markDownContext.jsx
 ├── hooks/
 │   ├── useMarkdownEditor.js
 ├── App.jsx
 └── index.js
```

---

## ✍️ Sample Markdown
Use this snippet to test your editor:
```md
# Welcome to Markify
This is **bold text**, *italic text*, and ~~strikethrough~~.

> "Markdown is simple and powerful."

- Item 1
- Item 2

\`\`\`javascript
console.log("Hello Markdown!");
\`\`\`
```

---

## 💡 Future Improvements
- Export to **PDF** and **HTML**
- Add **real-time word count**
- Add **collaborative editing (WebSocket)**

---

## 📜 License
This project is licensed under the **MIT License**.
