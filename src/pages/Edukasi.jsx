import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/frontend.css';

const modules = [
  {
    title: 'Pengenalan HNI',
    subtitle: 'Modul 1 · 3 pelajaran',
    icon: '🌿',
    contentTitle: 'Apa itu HNI & Thibbun Nabawi?',
    content: 'HNI adalah perusahaan herbal halal yang berdiri sejak 2012. Produk HNI dirancang berdasarkan prinsip Thibbun Nabawi, yaitu pengobatan yang bersumber dari ajaran Nabi Muhammad SAW.',
    stats: [
      { label: 'Didirikan', value: '2012' },
      { label: 'Member Aktif', value: '500.000+' },
      { label: 'Produk', value: '100+ SKU' },
      { label: 'Sertifikasi', value: 'BPOM & MUI' },
    ],
    tabs: [
      {
        title: 'Sejarah HNI',
        heading: 'Sejarah & Visi HNI',
        body: 'HNI lahir dari semangat memberdayakan umat melalui produk herbal halal dan sunnah. Visinya adalah menjadi perusahaan herbal halal terdepan yang memberdayakan jutaan keluarga Muslim Indonesia.',
      },
      {
        title: 'Thibbun Nabawi',
        heading: 'Apa itu Thibbun Nabawi?',
        body: 'Thibbun Nabawi adalah pengobatan yang bersumber dari Al-Quran dan Sunnah. Filosofi ini menjadi dasar produk HNI untuk menjaga kesehatan dengan cara yang Islami.',
      },
      {
        title: 'Sistem Bisnis',
        heading: 'Sistem Bisnis HNI',
        body: 'HNI menggunakan sistem MLM halal dengan pendapatan dari penjualan produk dan bonus jaringan. Model ini dirancang untuk membantu setiap distributor berkembang secara profesional.',
      },
    ],
  },
  {
    title: 'Produk Andalan',
    subtitle: 'Modul 2 · 5 pelajaran',
    icon: '🦀',
  },
  {
    title: 'Teknik Selling',
    subtitle: 'Modul 3 · 4 pelajaran',
    icon: '💬',
  },
  {
    title: 'Digital Marketing',
    subtitle: 'Modul 4 · 4 pelajaran',
    icon: '🌐',
  },
  {
    title: 'Bangun Jaringan',
    subtitle: 'Modul 5 · 3 pelajaran',
    icon: '👥',
  },
];

const quickQuestions = [
  'Jelaskan manfaat Kapsul Gamat secara lengkap',
  'Bagaimana cara menawarkan produk HNI ke customer?',
  'Apa itu sinergi produk HNI?',
];

const defaultMessages = [
  {
    role: 'bot',
    content: 'Assalamu’alaikum! 📚 Saya AI Trainer HNI. Saya siap membantu Anda memahami materi training. Ada yang ingin ditanyakan tentang produk atau bisnis HNI?',
    time: 'Baru saja',
  },
];

const Edukasi = () => {
  const [activeModule, setActiveModule] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [messages, setMessages] = useState(defaultMessages);
  const [chatInput, setChatInput] = useState('');
  const [quickVisible, setQuickVisible] = useState(true);

  useEffect(() => {
    document.body.classList.add('frontend-body');
    return () => document.body.classList.remove('frontend-body');
  }, []);

  const activeContent = modules[activeModule] || modules[0];

  const sendMessage = (text) => {
    if (!text) return;
    setQuickVisible(false);
    const now = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    setMessages((prev) => [...prev, { role: 'user', content: text, time: now }]);
    setChatInput('');
    setTimeout(() => {
      setMessages((prev) => [...prev, {
        role: 'bot',
        content: 'Maaf, fungsi AI sementara tidak tersedia di demo. Silakan gunakan materi yang ada untuk mempelajari HNI lebih lanjut.',
        time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      }]);
    }, 700);
  };

  return (
    <div>
      <nav className="frontend-nav">
        <div className="nav-logo">HNI <span>Edukasi</span></div>
        <div className="nav-links">
          <Link to="/" className="nav-back">← Beranda</Link>
          <Link to="/rekrutmen" className="nav-back">Rekrutmen</Link>
          <Link to="/selling" className="nav-back">Selling</Link>
        </div>
      </nav>
      <div className="hero-edu">
        <div className="page-badge biru">📚 Pusat Training</div>
        <h1 className="page-title">Belajar Jadi Distributor Handal</h1>
        <p className="page-sub">Modul training interaktif untuk membantu Anda menguasai produk dan bisnis HNI</p>
      </div>
      <div className="main-layout edu">
        <div className="sidebar">
          <h3>Modul Training</h3>
          <div className="modul-list">
            {modules.map((module, index) => (
              <button
                key={module.title}
                type="button"
                onClick={() => { setActiveModule(index); setActiveTab(0); }}
                className={`modul-item ${activeModule === index ? 'active' : ''}`}
              >
                <div className="modul-icon">{module.icon}</div>
                <div className="modul-info">
                  <div className="modul-nama">{module.title}</div>
                  <div className="modul-progress">{module.subtitle}</div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: activeModule === index ? '100%' : index === 1 ? '60%' : index === 2 ? '30%' : index === 3 ? '0%' : '0%' }}></div>
                  </div>
                </div>
                {activeModule === index && <div className="modul-badge">✓</div>}
              </button>
            ))}
          </div>
        </div>
        <div className="content-area">
          <div className="content-header">
            <div className="content-modul">{activeContent.subtitle}</div>
            <div className="content-title">{activeContent.contentTitle}</div>
          </div>
          <div className="content-body">
              <div className="lesson-tabs">
              {(activeContent.tabs || [{ title: 'Ringkasan', heading: activeContent.title, body: 'Materi modul ini akan ditampilkan di sini.' }]).map((tab, index) => (
                <button
                  key={tab.title}
                  type="button"
                  className={`lesson-tab ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            {(activeContent.tabs || [{ title: 'Ringkasan', heading: activeContent.title, body: 'Materi modul ini akan ditampilkan di sini.' }]).map((tab, index) => (
              <div key={tab.title} className={`lesson-content ${activeTab === index ? 'active' : ''}`}>
                <h4>{tab.heading}</h4>
                <p>{tab.body}</p>
                <div className="highlight-box">
                  <p>💡 <strong>Visi HNI:</strong> Menjadi perusahaan herbal halal terdepan yang memberdayakan jutaan keluarga Muslim.</p>
                </div>
                <div className="info-grid">
                  {activeContent.stats.map((info) => (
                    <div key={info.label} className="info-card">
                      <div className="info-card-label">{info.label}</div>
                      <div className="info-card-val">{info.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="quiz-section">
              <div className="quiz-title">📝 Kuis Modul 1</div>
              <div className="quiz-q">HNI berdiri pada tahun berapa?</div>
              <div className="quiz-options">
                <button type="button" className="quiz-opt" onClick={() => sendMessage('2008')}>2008</button>
                <button type="button" className="quiz-opt" onClick={() => sendMessage('2012')}>2012</button>
                <button type="button" className="quiz-opt" onClick={() => sendMessage('2015')}>2015</button>
                <button type="button" className="quiz-opt" onClick={() => sendMessage('2010')}>2010</button>
              </div>
              <button type="button" className="btn-next" onClick={() => { setActiveModule(1); setActiveTab(0); }}>Lanjut ke Modul 2 →</button>
            </div>
          </div>
        </div>
        <div className="chat-panel">
          <div className="chat-header">
            <div className="chat-avatar">📚</div>
            <div className="chat-info">
              <h4>AI Trainer HNI</h4>
              <p>● Siap membantu belajar Anda</p>
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
              placeholder="Tanya materi training..."
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

export default Edukasi;
