import React from "react";

import Editor from "@monaco-editor/react";

function MonacoEditor({ onWordChange, code, language }) {
  function handleEditorChange(value) {
    onWordChange(value);
  }

  return (
    <Editor
      defaultLanguage={language}
      defaultValue={code}
      onChange={handleEditorChange}
      theme="vs-dark"
    />
  );
}

export default MonacoEditor;
