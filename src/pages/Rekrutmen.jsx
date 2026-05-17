import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/frontend.css';

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
    role: 'bot',
    content: 'Assalamu’alaikum! 🌟 Selamat datang di halaman bergabung HNI. Saya siap menjawab semua pertanyaan Anda tentang bisnis ini.',
    time: 'Baru saja',
  },
];

const Rekrutmen = () => {
  const [messages, setMessages] = useState(defaultMessages);
  const [chatInput, setChatInput] = useState('');
  const [quickVisible, setQuickVisible] = useState(true);

  useEffect(() => {
    document.body.classList.add('frontend-body');
    return () => document.body.classList.remove('frontend-body');
  }, []);

  const sendMessage = (text) => {
    if (!text) return;
    setQuickVisible(false);
    const now = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    setMessages((prev) => [...prev, { role: 'user', content: text, time: now }]);
    setChatInput('');
    setTimeout(() => {
      setMessages((prev) => [...prev, {
        role: 'bot',
        content: 'Bisnis HNI memiliki modal terjangkau dan dukungan pelatihan. Untuk langkah daftar, silakan isi form pendaftaran dan hubungi upline Anda.',
        time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      }]);
    }, 700);
  };

  return (
    <div>
      <nav className="frontend-nav">
        <div className="nav-logo">HNI <span>Rekrutmen</span></div>
        <div className="nav-links">
          <Link to="/" className="nav-back">← Beranda</Link>
          <Link to="/edukasi" className="nav-back">Edukasi</Link>
          <Link to="/selling" className="nav-back">Selling</Link>
        </div>
      </nav>
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
              <div key={index} className={`msg ${msg.role}`}>
                {msg.content}
                <div className="msg-time">{msg.time}</div>
              </div>
            ))}
          </div>
          <div className="quick-replies" style={{ display: quickVisible ? 'flex' : 'none' }}>
            {quickQuestions.map((question) => (
              <button key={question} type="button" className="quick-btn" onClick={() => sendMessage(question)}>{question}</button>
            ))}
          </div>
          <div className="chat-input-area">
            <input
              value={chatInput}
              onChange={(event) => setChatInput(event.target.value)}
              className="chat-input"
              placeholder="Tanya tentang bisnis HNI..."
              onKeyDown={(event) => event.key === 'Enter' && sendMessage(chatInput)}
            />
            <button type="button" className="chat-send" onClick={() => sendMessage(chatInput)}>
              <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rekrutmen;
