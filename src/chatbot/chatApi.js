const DEFAULT_CHAT_ENDPOINT = 'http://localhost:3001/api/chat';

function getChatEndpoint() {
  return import.meta.env.VITE_CHAT_ENDPOINT || DEFAULT_CHAT_ENDPOINT;
}

export async function sendChat({ message, history }) {
  const res = await fetch(getChatEndpoint(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, history }),
  });

  if (!res.ok) {
    const raw = await res.text().catch(() => '');
    throw new Error(raw || `HTTP ${res.status}`);
  }

  const data = await res.json();
  const reply = (data?.reply ?? '').toString().trim();

  if (!reply) {
    throw new Error('Empty reply');
  }

  return reply;
}

