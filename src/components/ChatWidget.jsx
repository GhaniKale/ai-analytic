import { useEffect, useRef, useState } from 'react';
import '../assets/frontend.css';
import { getFallbackReply } from '../chatbot/fallbackReply';
import { sendChat } from '../chatbot/chatApi';

const defaultQuickReplies = [
  { label: 'Nyeri lutut', text: 'Saya punya masalah nyeri lutut' },
  { label: 'Cara daftar', text: 'Cara daftar jadi member HNI' },
  { label: 'Info harga', text: 'Berapa harga produk HNI?' },
];

const defaultWelcomeMessage = {
  role: 'assistant',
  content:
    "Assalamu'alaikum! Saya asisten website HNI. Silakan tanya seputar produk herbal, edukasi, rekrutmen distributor, atau cara order.",
  time: 'Baru saja',
};

function nowTime() {
  return new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
}

function toChatHistory(messages) {
  return messages
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant'))
    .map((m) => ({ role: m.role, content: m.content }));
}

export default function ChatWidget() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([defaultWelcomeMessage]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showNotif, setShowNotif] = useState(true);
  const [quickRepliesVisible, setQuickRepliesVisible] = useState(true);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, chatOpen]);

  const toggleChat = () => {
    setChatOpen((prev) => !prev);
    setShowNotif(false);
  };

  const sendChatMessage = async (overrideText = null) => {
    const text = (overrideText ?? chatInput).trim();
    if (!text || isTyping) return;

    if (overrideText === null) {
      setChatInput('');
    }

    setQuickRepliesVisible(false);

    if (!chatOpen) {
      setChatOpen(true);
      setShowNotif(false);
    }

    const userMsg = { role: 'user', content: text, time: nowTime() };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setIsTyping(true);

    try {
      const reply = await sendChat({
        message: text,
        history: toChatHistory(nextMessages),
      });

      setIsTyping(false);
      setMessages((prev) => [...prev, { role: 'assistant', content: reply, time: nowTime() }]);
    } catch {
      const fallback = getFallbackReply(text);
      const errorReply = [
        'Maaf, layanan AI sedang mengalami gangguan.',
        'Berikut jawaban singkat sementara:',
        '',
        fallback,
      ].join('\n');

      setIsTyping(false);
      setMessages((prev) => [...prev, { role: 'assistant', content: errorReply, time: nowTime() }]);
    }
  };

  return (
    <>
      <button
        type="button"
        className="chat-fab"
        onClick={toggleChat}
        aria-label={chatOpen ? 'Tutup chat' : 'Buka chat'}
        aria-expanded={chatOpen}
      >
        <svg viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
        </svg>
        {showNotif && <div className="chat-notif">1</div>}
      </button>

      <div className={`chat-window ${chatOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <div className="chat-avatar">🌿</div>
          <div className="chat-info">
            <h4>Asisten HNI</h4>
            <p>
              <span className="chat-status"></span>Online sekarang
            </p>
          </div>
        </div>

        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <div
              key={`${msg.role}-${idx}`}
              className={`msg ${msg.role === 'user' ? 'user' : 'bot'}`}
            >
              {msg.content}
              <div className="msg-time">{msg.time}</div>
            </div>
          ))}

          {isTyping && (
            <div className="typing" aria-label="AI sedang mengetik">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {quickRepliesVisible && (
          <div className="quick-replies">
            {defaultQuickReplies.map((q) => (
              <button
                key={q.label}
                type="button"
                className="quick-btn hijau"
                onClick={() => sendChatMessage(q.text)}
              >
                {q.label}
              </button>
            ))}
          </div>
        )}

        <div className="chat-input-area">
          <input
            type="text"
            className="chat-input hijau"
            placeholder={isTyping ? 'Menunggu balasan AI…' : 'Ketik pesan...'}
            value={chatInput}
            disabled={isTyping}
            onChange={(e) => setChatInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') sendChatMessage();
            }}
          />
          <button
            type="button"
            className="chat-send hijau"
            onClick={() => sendChatMessage()}
            disabled={isTyping || chatInput.trim().length === 0}
            aria-label="Kirim pesan"
          >
            <svg viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
