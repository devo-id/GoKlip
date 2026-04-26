import { useState } from "react";

const ClipboardEditor = () => {
  const [content, setContent] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Type something..."
        style={{
          width: "100%",
          height: "80vh",
          fontFamily: "monospace",
        }}
      />
    </div>
  );
};

export default ClipboardEditor;
