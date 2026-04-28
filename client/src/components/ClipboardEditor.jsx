import { useState, useEffect } from "react";
import { createClipboard } from "../services/api";

const ClipboardEditor = ({ roomId }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    async function load() {
      const data = await createClipboard(roomId);
      setContent(data.content || "");
    }

    load();
  }, [roomId]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="px-4 py-3 border-b border-zinc-800 text-sm text-zinc-400">
        Room: {roomId}{" "}
      </header>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Start typing..."
        className="flex-1 bg-black text-white p-4 font-mono text-sm outline-none resize-none"
      />
      <div className="px-4 py-2 border-t border-zinc-800 text-xs text-zinc-500">
        {content.length} characters{" "}
      </div>
    </div>
  );
};

export default ClipboardEditor;
