import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../assets/frontend.css';
import { getFallbackReply } from '../chatbot/fallbackReply';

export default function Frontend() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showNotif, setShowNotif] = useState(true);
  const [quickRepliesVisible, setQuickRepliesVisible] = useState(true);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    document.body.classList.add('frontend-body');
    return () => {
      document.body.classList.remove('frontend-body');
      observer.disconnect();
    };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory, isTyping, chatOpen]);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
    setShowNotif(false);
  };

  const sendChatMessage = (text) => {
    handleKirimChat(text);
    if (!chatOpen) {
      setChatOpen(true);
      setShowNotif(false);
    }
  };

  const handleKirimChat = async (overrideText = null) => {
    const msg = overrideText !== null ? overrideText : chatInput.trim();
    if (!msg) return;

    if (overrideText === null) {
      setChatInput('');
    }
    
    setQuickRepliesVisible(false);
    
    const now = new Date().toLocaleTimeString('id-ID', {hour:'2-digit', minute:'2-digit'});
    
    const newUserMsg = { role: 'user', content: msg, time: now };
    const newHistory = [...chatHistory, newUserMsg];
    setChatHistory(newHistory);
    setIsTyping(true);

    try {
      const chatEndpoint = import.meta.env.VITE_CHAT_ENDPOINT;

      let reply = '';

      if (chatEndpoint) {
        const res = await fetch(chatEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: msg,
            history: newHistory.map((m) => ({ role: m.role, content: m.content })),
          }),
        });

        if (res.ok) {
          const data = await res.json();
          reply = data?.reply ?? '';
        }
      }

      if (!reply) {
        await new Promise((r) => setTimeout(r, 700));
        reply = getFallbackReply(msg);
      }

      setIsTyping(false);
      setChatHistory(prev => [...prev, { role: 'assistant', content: reply, time: new Date().toLocaleTimeString('id-ID', {hour:'2-digit', minute:'2-digit'}) }]);
    } catch {
      setIsTyping(false);
      const reply = getFallbackReply(msg);
      setChatHistory(prev => [...prev, { role: 'assistant', content: reply, time: new Date().toLocaleTimeString('id-ID', {hour:'2-digit', minute:'2-digit'}) }]);
    }
  };

  const daftarMember = () => {
    const nama = document.getElementById('reg-nama').value;
    const wa = document.getElementById('reg-wa').value;
    const kota = document.getElementById('reg-kota').value;
    const minat = document.getElementById('reg-minat').value;
    if (!nama || !wa || !kota || !minat) {
      alert('Mohon lengkapi semua data terlebih dahulu!');
      return;
    }
    const msg = `Halo, saya ${nama} dari ${kota}. No WA: ${wa}. Saya tertarik untuk: ${minat}. Saya ingin bergabung sebagai member HNI.`;
    window.open(`https://wa.me/62${wa.replace(/^0/, '')}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="frontend-container">
      {/* NAVBAR */}
      <nav className="frontend-nav">
        <div className="nav-logo">HNI <span>Business</span></div>
        <ul className="nav-links">
          <li><Link to="/edukasi">Edukasi</Link></li>
          <li><Link to="/rekrutmen">Rekrutmen</Link></li>
          <li><Link to="/selling">Selling</Link></li>
          <li><Link to="/rekrutmen" className="nav-cta">Daftar Sekarang</Link></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">Produk Halal & Thayyib</div>
          <h1 className="hero-title">
            Sehat <span className="emas">Ala Rasul</span>,<br />
            Berkah <span className="hijau">Bersama HNI</span>
          </h1>
          <p className="hero-sub">
            Produk herbal halal berkualitas premium berbasis Thibbun Nabawi. 
            Solusi kesehatan keluarga yang telah dipercaya jutaan orang Indonesia.
          </p>
          <div className="hero-buttons">
            <a href="#produk" className="btn-primary">Lihat Produk</a>
            <a href="#bergabung" className="btn-secondary">Jadi Distributor</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-card">
            <div style={{fontFamily: "'Amiri', serif", fontSize: "15px", color: "var(--hijau)", marginBottom: "16px", fontStyle: "italic"}}>
              "وَإِن تَعُدُّوا نِعْمَةَ اللَّهِ لَا تُحْصُوهَا"
            </div>
            <div style={{fontSize: "13px", color: "var(--abu)", marginBottom: "20px"}}>
              "Dan jika kamu menghitung nikmat Allah, niscaya kamu tidak akan mampu menghitungnya." — QS. Ibrahim: 34
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-num">500K+</div>
                <div className="stat-label">Member aktif</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">100+</div>
                <div className="stat-label">Produk halal</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">15+</div>
                <div className="stat-label">Tahun berdiri</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">BPOM</div>
                <div className="stat-label">Tersertifikasi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUK */}
      <section className="section" id="produk">
        <div className="section-header reveal">
          <div className="section-badge">Produk Unggulan</div>
          <h2 className="section-title">Herbal Pilihan untuk Keluarga</h2>
          <p className="section-sub">Formulasi alami berbasis sunnah Nabi untuk menjaga kesehatan Anda</p>
        </div>
        <div className="produk-grid">
          <div className="produk-card reveal" onClick={() => sendChatMessage('Saya ingin tahu lebih lanjut tentang Kapsul Gamat')}>
            <div className="produk-icon">🦀</div>
            <div className="produk-nama">Kapsul Gamat</div>
            <div className="produk-manfaat">Meredakan nyeri sendi, pengapuran lutut, dan mempercepat penyembuhan luka. Kaya kolagen tipe II dan omega-3.</div>
            <div className="produk-tag">Sendi & Tulang</div>
          </div>
          <div className="produk-card reveal" onClick={() => sendChatMessage('Ceritakan tentang Madu Multiflora HNI')}>
            <div className="produk-icon">🍯</div>
            <div className="produk-nama">Madu Multiflora</div>
            <div className="produk-manfaat">Menjaga daya tahan tubuh, sumber energi alami, dan melindungi dari radikal bebas. 100% madu murni.</div>
            <div className="produk-tag">Imunitas</div>
          </div>
          <div className="produk-card reveal" onClick={() => sendChatMessage('Apa manfaat Minyak Herba Sinergi?')}>
            <div className="produk-icon">💧</div>
            <div className="produk-nama">Minyak Herba Sinergi</div>
            <div className="produk-manfaat">Minyak P3K keluarga untuk pegal linu, masuk angin, memar, dan gigitan serangga. Praktis dibawa kemana saja.</div>
            <div className="produk-tag">P3K Keluarga</div>
          </div>
          <div className="produk-card reveal" onClick={() => sendChatMessage('Saya mau tahu tentang Kopi Sevel Stamina')}>
            <div className="produk-icon">☕</div>
            <div className="produk-nama">Kopi Sevel Stamina</div>
            <div className="produk-manfaat">Kopi herbal 7 elemen dengan jahe merah, pasak bumi, dan daun kelor. Tanpa gula buatan, pakai stevia.</div>
            <div className="produk-tag">Stamina & Fokus</div>
          </div>
          <div className="produk-card reveal" onClick={() => sendChatMessage('Apa itu EGM susu kambing HNI?')}>
            <div className="produk-icon">🥛</div>
            <div className="produk-nama">EGM Susu Kambing</div>
            <div className="produk-manfaat">Nutrisi lengkap untuk tulang dan sendi. Sangat baik dikombinasikan dengan Kapsul Gamat untuk hasil optimal.</div>
            <div className="produk-tag">Nutrisi Harian</div>
          </div>
          <div className="produk-card reveal" onClick={() => sendChatMessage('Apakah HNI punya produk lain selain yang disebutkan?')}>
            <div className="produk-icon">🌿</div>
            <div className="produk-nama">&amp; 95+ Produk Lainnya</div>
            <div className="produk-manfaat">Spirulina, Bilberry, PGH, Sabun Herbal, Kosmetik Halal, dan masih banyak lagi. Semua halal bersertifikat MUI.</div>
            <div className="produk-tag">Lihat Semua</div>
          </div>
        </div>
      </section>

      {/* PROGRAM PRO MASTER */}
      <section className="program-section" id="program">
        <div className="program-inner">
          <div className="section-badge" style={{background: "rgba(255,255,255,0.15)", color: "var(--emas-muda)", borderColor: "rgba(255,255,255,0.2)"}}>Program Unggulan</div>
          <h2 className="program-title">Program Pro Master</h2>
          <p className="program-sub">Paket lengkap 1 bulan untuk regenerasi sel tubuh secara maksimal</p>
          <div className="program-paket">
            <div className="paket-item"><div className="paket-icon">☕</div><div className="paket-nama">Kopi Sevel</div></div>
            <div className="paket-plus">+</div>
            <div className="paket-item"><div className="paket-icon">🦀</div><div className="paket-nama">Kapsul Gamat</div></div>
            <div className="paket-plus">+</div>
            <div className="paket-item"><div className="paket-icon">🍯</div><div className="paket-nama">Madu Multiflora</div></div>
            <div className="paket-plus">+</div>
            <div className="paket-item"><div className="paket-icon">💧</div><div className="paket-nama">MHS</div></div>
          </div>
          <a href="https://s.hni.id/7JXVILG" target="_blank" rel="noopener noreferrer" className="btn-emas">Pesan Program Pro Master →</a>
        </div>
      </section>

      {/* BERGABUNG / REKRUTMEN */}
      <section className="section" id="bergabung">
        <div className="section-header reveal">
          <div className="section-badge">Peluang Bisnis</div>
          <h2 className="section-title">Bangun Jaringan, Raih Berkah</h2>
          <p className="section-sub">Bergabunglah sebagai distributor HNI dan mulai perjalanan bisnis halal Anda</p>
        </div>
        <div className="rekrut-grid">
          <div className="rekrut-steps reveal">
            <div className="rekrut-step">
              <div className="step-num">1</div>
              <div className="step-content">
                <h4>Daftar sebagai Member</h4>
                <p>Isi formulir pendaftaran dan lengkapi data diri Anda. Proses cepat dan mudah.</p>
              </div>
            </div>
            <div className="rekrut-step">
              <div className="step-num">2</div>
              <div className="step-content">
                <h4>Ikuti Training Produk</h4>
                <p>Pelajari semua produk HNI dan cara memasarkannya melalui modul edukasi interaktif.</p>
              </div>
            </div>
            <div className="rekrut-step">
              <div className="step-num">3</div>
              <div className="step-content">
                <h4>Mulai Jualan &amp; Rekrut</h4>
                <p>Pasarkan produk ke konsumen dan ajak orang lain bergabung di jaringan Anda.</p>
              </div>
            </div>
            <div className="rekrut-step">
              <div className="step-num">4</div>
              <div className="step-content">
                <h4>Nikmati Komisi &amp; Bonus</h4>
                <p>Dapatkan komisi penjualan, bonus jaringan, dan berbagai reward menarik dari HNI.</p>
              </div>
            </div>
          </div>
          <div className="form-card reveal">
            <div className="form-title">Daftar Jadi Member</div>
            <div className="form-sub">Gratis! Mulai perjalanan bisnis halal Anda hari ini</div>
            <div className="form-group">
              <label className="form-label">Nama Lengkap</label>
              <input type="text" className="form-input" placeholder="Masukkan nama lengkap Anda" id="reg-nama" />
            </div>
            <div className="form-group">
              <label className="form-label">Nomor WhatsApp</label>
              <input type="tel" className="form-input" placeholder="08xxxxxxxxxx" id="reg-wa" />
            </div>
            <div className="form-group">
              <label className="form-label">Kota/Kabupaten</label>
              <input type="text" className="form-input" placeholder="Contoh: Surabaya" id="reg-kota" />
            </div>
            <div className="form-group">
              <label className="form-label">Minat Utama</label>
              <select className="form-select" id="reg-minat">
                <option value="">Pilih minat Anda</option>
                <option value="produk">Beli produk untuk keluarga</option>
                <option value="bisnis">Bisnis &amp; cari penghasilan tambahan</option>
                <option value="keduanya">Keduanya</option>
              </select>
            </div>
            <button className="btn-primary" style={{width: "100%", justifyContent: "center"}} onClick={daftarMember}>
              Daftar Sekarang →
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="frontend-footer">
        <div className="footer-inner">
          <div>
            <div className="footer-logo">HNI <span>Business</span></div>
            <p className="footer-desc">PT Halal Network International – membangun ekosistem bisnis halal yang memberdayakan umat melalui produk herbal berkualitas berbasis Thibbun Nabawi.</p>
          </div>
          <div>
            <div className="footer-title">Produk</div>
            <ul className="footer-links">
              <li><a href="#">Kapsul Gamat</a></li>
              <li><a href="#">Madu Multiflora</a></li>
              <li><a href="#">Kopi Sevel</a></li>
              <li><a href="#">Minyak Herba Sinergi</a></li>
              <li><a href="#">Semua Produk</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-title">Informasi</div>
            <ul className="footer-links">
              <li><a href="#">Tentang HNI</a></li>
              <li><a href="#">Cara Order</a></li>
              <li><a href="#">Jadi Distributor</a></li>
              <li><a href="#">Kontak Kami</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 HNI Business Center. Semua hak dilindungi.</span>
          <span>Produk bersertifikat BPOM &amp; MUI</span>
        </div>
      </footer>

      {/* CHATBOT FAB */}
      <button className="chat-fab" onClick={toggleChat} id="chat-fab">
        <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
        {showNotif && <div className="chat-notif">1</div>}
      </button>

      {/* CHAT WINDOW */}
      <div className={`chat-window ${chatOpen ? 'open' : ''}`} id="chat-window">
        <div className="chat-header">
          <div className="chat-avatar">🌿</div>
          <div className="chat-info">
            <h4>Konsultan HNI</h4>
            <p><span className="chat-status"></span>Online sekarang</p>
          </div>
        </div>
        <div className="chat-messages" id="chat-messages">
          <div className="msg bot">
            Assalamu'alaikum! 👋 Saya konsultan kesehatan HNI. Ada yang bisa saya bantu hari ini?
            <div className="msg-time">Baru saja</div>
          </div>
          {chatHistory.map((msg, idx) => (
            <div key={idx} className={`msg ${msg.role === 'user' ? 'user' : 'bot'}`}>
              {msg.content}
              <div className="msg-time">{msg.time}</div>
            </div>
          ))}
          {isTyping && (
            <div className="typing">
              <span></span><span></span><span></span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        {quickRepliesVisible && (
          <div className="quick-replies" id="quick-replies">
            <button className="quick-btn" onClick={() => sendChatMessage('Saya punya masalah nyeri lutut')}>Nyeri lutut</button>
            <button className="quick-btn" onClick={() => sendChatMessage('Cara daftar jadi member HNI')}>Cara daftar</button>
            <button className="quick-btn" onClick={() => sendChatMessage('Berapa harga produk HNI?')}>Info harga</button>
          </div>
        )}
        <div className="chat-input-area">
          <input 
            type="text" 
            className="chat-input" 
            id="chat-input" 
            placeholder="Ketik pesan..." 
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            onKeyPress={(e) => {
              if(e.key === 'Enter') handleKirimChat();
            }}
          />
          <button className="chat-send" onClick={() => handleKirimChat()}>
            <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
