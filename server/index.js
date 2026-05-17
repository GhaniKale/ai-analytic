import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: '1mb' }));

const PORT = Number(process.env.PORT ?? 3001);
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

const DEFAULT_MODELS = [
  'deepseek/deepseek-chat-v3:free',
  'qwen/qwen3-235b-a22b:free',
];

const SYSTEM_PROMPT = [
  'Anda adalah asisten resmi website HNI (Halal Network International).',
  'Tugas Anda adalah membantu pengunjung memahami:',
  '- Profil singkat HNI dan nilai-nilai halal & thayyib',
  '- Edukasi herbal (gaya hidup sehat, pemakaian produk sesuai kemasan)',
  '- Peluang rekrutmen member/distributor',
  '- Selling: rekomendasi produk secara umum, cara pemesanan, dan langkah order',
  '',
  'Aturan gaya bahasa:',
  '- Gunakan Bahasa Indonesia yang ramah, sopan, jelas, dan ringkas.',
  '- Jika pengguna meminta langkah praktis, berikan poin-poin.',
  '',
  'Aturan kesehatan & klaim:',
  '- Jangan mendiagnosis penyakit dan jangan mengklaim produk menyembuhkan penyakit.',
  '- Jelaskan manfaat produk secara edukatif (dukungan/ membantu menjaga) tanpa janji hasil.',
  '- Untuk keluhan berat/serius, gejala berbahaya, atau kondisi medis tertentu, selalu sarankan konsultasi dokter/tenaga medis.',
  '- Sarankan mengikuti aturan pakai di kemasan. Jika ragu, konsultasi tenaga kesehatan.',
  '',
  'Aturan bisnis & order:',
  '- Jika ditanya cara daftar distributor, jelaskan alur umum dan data yang biasanya dibutuhkan (nama, WA, kota, minat).',
  '- Jika ditanya harga, jelaskan bisa berbeda tergantung promo/wilayah; minta nama produk dan kota untuk estimasi.',
  '- Jika ditanya cara order, arahkan untuk menghubungi admin/WhatsApp atau mengikuti alur pemesanan di website.',
].join('\n');

function nowTime() {
  return new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
}

function normalizeHistory(history) {
  if (!Array.isArray(history)) return [];
  return history
    .filter((m) => m && typeof m === 'object')
    .map((m) => ({
      role: m.role === 'assistant' || m.role === 'user' ? m.role : null,
      content: typeof m.content === 'string' ? m.content : '',
    }))
    .filter((m) => m.role && m.content.trim().length > 0)
    .slice(-20);
}

async function createChatCompletion({ model, messages }) {
  const controller = new AbortController();
  const timeoutMs = Number(process.env.OPENROUTER_TIMEOUT_MS ?? 45_000);
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  const maxCompletionTokens = Number(process.env.OPENROUTER_MAX_COMPLETION_TOKENS ?? 700);

  try {
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': process.env.OPENROUTER_HTTP_REFERER ?? 'http://localhost',
        'X-OpenRouter-Title': process.env.OPENROUTER_TITLE ?? 'HNI Website Chatbot',
      },
      body: JSON.stringify({
        model,
        messages,
        temperature: 0.6,
        max_completion_tokens: Number.isFinite(maxCompletionTokens) ? maxCompletionTokens : 700,
      }),
      signal: controller.signal,
    });

    const raw = await res.text();
    let data = null;
    try {
      data = JSON.parse(raw);
    } catch {
      data = null;
    }

    if (!res.ok) {
      const message =
        data?.error?.message ||
        data?.message ||
        raw ||
        `OpenRouter error (HTTP ${res.status})`;
      const error = new Error(message);
      error.status = res.status;
      error.code = data?.error?.code;
      throw error;
    }

    const reply = data?.choices?.[0]?.message?.content ?? '';
    return reply.toString().trim();
  } finally {
    clearTimeout(timeout);
  }
}

async function getAIReply({ message, history }) {
  const models = (process.env.OPENROUTER_MODEL_LIST ?? '')
    .split(',')
    .map((m) => m.trim())
    .filter(Boolean);

  const modelCandidates = models.length > 0 ? models : DEFAULT_MODELS;

  const chatHistory = normalizeHistory(history);
  const messages = [{ role: 'system', content: SYSTEM_PROMPT }, ...chatHistory];

  if (!chatHistory.length || chatHistory[chatHistory.length - 1]?.role !== 'user') {
    messages.push({ role: 'user', content: message });
  }

  let lastError = null;
  for (const model of modelCandidates) {
    try {
      const reply = await createChatCompletion({ model, messages });
      if (reply) return reply;
      lastError = new Error('Empty reply from model');
    } catch (err) {
      lastError = err;
    }
  }

  throw lastError ?? new Error('Failed to get reply');
}

app.get('/health', (_req, res) => {
  res.json({ ok: true, time: nowTime() });
});

app.post('/api/chat', async (req, res) => {
  try {
    if (!OPENROUTER_API_KEY) {
      return res.status(500).json({
        error: 'OPENROUTER_API_KEY belum di-set di server/.env',
      });
    }

    const message = req.body?.message;
    const history = req.body?.history;

    if (typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({ error: 'Field "message" wajib berupa string.' });
    }

    if (message.length > 4000) {
      return res.status(400).json({ error: 'Pesan terlalu panjang (maks 4000 karakter).' });
    }

    const reply = await getAIReply({ message: message.trim(), history });
    return res.json({ reply });
  } catch (err) {
    return res.status(500).json({
      error: err?.message ?? 'Gagal memproses chat.',
    });
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`HNI chat server listening on http://localhost:${PORT}`);
});
