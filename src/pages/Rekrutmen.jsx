import { useEffect, useState } from 'react';
import FrontendNavbar from '../components/FrontendNavbar';
import '../assets/frontend.css';
import { sendChat } from '../chatbot/chatApi';

const quickQuestions = [
  'Berapa modal awal untuk gabung HNI?',
  'Berapa potensi penghasilan sebagai distributor?',
  'Bagaimana cara daftar jadi member HNI?',
];

const benefits = [
  { icon: '💰', title: 'Komisi & Bonus Menarik', description: 'Dapatkan komisi penjualan dan bonus jaringan kompetitif setiap bulan.' },
  { icon: '📦', title: 'Produk 100% Halal', description: 'Produk halal bersertifikat BPOM & MUI, berbasis Thibbun Nabawi.' },
  { icon: '📱', title: 'Support & Training', description: 'Akses modul training lengkap, materi pemasaran, dan dukungan komunitas member.' },
  { icon: '🌐', title: 'Bisnis Online & Offline', description: 'Fleksibel dijalankan dari rumah, sambil kerja, atau full-time sesuai kebutuhan.' },
];

const levels = [
  { name: 'Member', description: 'Mulai dari sini' },
  { name: 'Agen', description: 'Kembangkan jaringan' },
  { name: 'Stokis', description: 'Kelola stok area' },
];

const defaultMessages = [
  {
    role: 'assistant',
    content: 'Assalamu’alaikum! 🌟 Selamat datang di halaman bergabung HNI. Saya siap menjawab semua pertanyaan Anda tentang bisnis ini.',
    time: 'Baru saja',
  },
];

const Rekrutmen = () => {
  const [messages, setMessages] = useState(defaultMessages);
  const [chatInput, setChatInput] = useState('');
  const [quickVisible, setQuickVisible] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    document.body.classList.add('frontend-body');
    return () => document.body.classList.remove('frontend-body');
  }, []);

  const sendMessage = async (text) => {
    const trimmed = (text ?? '').toString().trim();
    if (!trimmed || isTyping) return;

    setQuickVisible(false);
    const now = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

    const userMsg = { role: 'user', content: trimmed, time: now };
    const nextMessages = [...messages, userMsg];

    setMessages(nextMessages);
    setChatInput('');
    setIsTyping(true);

    try {
      const reply = await sendChat({
        message: trimmed,
        history: nextMessages.map((m) => ({ role: m.role, content: m.content })),
      });

      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: reply,
          time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } catch {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Maaf, layanan AI sedang mengalami gangguan. Silakan coba lagi sebentar ya.',
          time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }
  };

  return (
    <div>
      <FrontendNavbar title="Rekrutmen" />
      <div className="hero-rekrut">
        <div className="page-badge emas">🤝 Peluang Bisnis Halal</div>
        <h1 className="page-title">Bangun Jaringan, Raih Berkah</h1>
        <p className="page-sub">Tanya AI kami tentang bisnis HNI dan mulai perjalanan distributor Anda hari ini</p>
      </div>
      <div className="main-layout rekrut">
        <div>
          <div className="info-side">
            <h3>Keuntungan Bergabung HNI</h3>
            <div className="benefit-cards">
              {benefits.map((card) => (
                <div key={card.title} className="benefit-card">
                  <div className="benefit-icon">{card.icon}</div>
                  <div>
                    <div className="benefit-title">{card.title}</div>
                    <div className="benefit-desc">{card.description}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="level-section">
              <div className="level-title">Jenjang Karir Distributor HNI</div>
              <div className="level-grid">
                {levels.map((level) => (
                  <div key={level.name} className="level-item">
                    <div className="level-name">{level.name}</div>
                    <div className="level-desc">{level.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="chat-panel">
          <div className="chat-header">
            <div className="chat-avatar">🤝</div>
            <div className="chat-info">
              <h4>AI Rekrutmen HNI</h4>
              <p>● Siap menjawab pertanyaan Anda</p>
            </div>
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`msg ${msg.role === 'user' ? 'user' : 'bot'}`}>
                {msg.content}
                <div className="msg-time">{msg.time}</div>
              </div>
            ))}
            {isTyping && (
              <div className="typing" aria-label="AI sedang mengetik">
                <span></span><span></span><span></span>
              </div>
            )}
          </div>
          <div className="quick-replies" style={{ display: quickVisible ? 'flex' : 'none' }}>
            {quickQuestions.map((question) => (
              <button key={question} type="button" className="quick-btn emas" onClick={() => sendMessage(question)}>{question}</button>
            ))}
          </div>
          <div className="chat-input-area">
            <input
              value={chatInput}
              onChange={(event) => setChatInput(event.target.value)}
              className="chat-input emas"
              placeholder="Tanya tentang bisnis HNI..."
              onKeyDown={(event) => event.key === 'Enter' && sendMessage(chatInput)}
            />
            <button type="button" className="chat-send emas" onClick={() => sendMessage(chatInput)}>
              <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rekrutmen;
