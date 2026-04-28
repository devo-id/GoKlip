const API_URL = import.meta.env.VITE_API_URL;

export async function createClipboard(customId) {
  const res = await fetch(`${API_URL}/api/clipboards`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customId ? { customId } : {}),
  });

  return res.json();
}
