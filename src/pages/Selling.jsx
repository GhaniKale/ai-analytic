import { useEffect, useState } from 'react';
import FrontendNavbar from '../components/FrontendNavbar';
import '../assets/frontend.css';
import { sendChat } from '../chatbot/chatApi';

const products = [
  {
    id: 'gamat',
    icon: '🦀',
    name: 'Kapsul Gamat',
    benefit: 'Nyeri sendi, pengapuran lutut',
    tag: 'Sendi & Tulang',
    info: [
      { label: 'Manfaat Utama', value: 'Nyeri sendi & pengapuran' },
      { label: 'Dosis', value: '3×2 kapsul/hari' },
      { label: 'Sinergi Terbaik', value: 'Gamat + EGM' },
      { label: 'Cocok untuk', value: 'Dewasa & Lansia' },
    ],
    description: 'Kapsul herbal terbuat dari ekstrak gamat untuk mengurangi nyeri sendi dan mendukung pemulihan tulang.',
  },
  {
    id: 'madu',
    icon: '🍯',
    name: 'Madu Multiflora HNI',
    benefit: 'Imunitas, energi alami',
    tag: 'Imunitas',
    info: [
      { label: 'Manfaat Utama', value: 'Imunitas & energi' },
      { label: 'Cara Pakai', value: 'Langsung / campur air' },
      { label: 'Kandungan', value: '100% madu murni' },
      { label: 'Perhatian', value: 'Tidak untuk bayi < 1 thn' },
    ],
    description: 'Madu murni multiflora untuk menjaga daya tahan tubuh dan memberikan energi alami setiap hari.',
  },
  {
    id: 'mhs',
    icon: '💧',
    name: 'Minyak Herba Sinergi (MHS)',
    benefit: 'Pegal linu, masuk angin',
    tag: 'P3K Keluarga',
    info: [
      { label: 'Manfaat Utama', value: 'Pegal linu & masuk angin' },
      { label: 'Cara Pakai', value: 'Oles & pijat ringan' },
      { label: 'Varian', value: 'Regular & Extra Hot' },
      { label: 'Perhatian', value: 'Obat luar saja' },
    ],
    description: 'Minyak herbal praktis untuk meredakan pegal dan masuk angin dengan aroma alami yang menenangkan.',
  },
  {
    id: 'kopi',
    icon: '☕',
    name: 'Kopi Sevel Stamina',
    benefit: 'Stamina, fokus, energi',
    tag: 'Stamina',
    info: [
      { label: 'Manfaat Utama', value: 'Stamina & fokus' },
      { label: 'Cara Pakai', value: '1 sachet + 150ml air panas' },
      { label: 'Pemanis', value: 'Stevia alami' },
      { label: 'Kandungan', value: '7 elemen herbal' },
    ],
    description: 'Kopi herbal yang membantu menambah energi dan menjaga fokus, dikembangkan untuk lifestyle modern.' ,
  },
  {
    id: 'egm',
    icon: '🥛',
    name: 'EGM Susu Kambing',
    benefit: 'Tulang, sendi, nutrisi',
    tag: 'Nutrisi',
    info: [
      { label: 'Manfaat Utama', value: 'Tulang & sendi' },
      { label: 'Sinergi', value: 'EGM + Gamat' },
      { label: 'Nutrisi', value: 'Lengkap & mudah dicerna' },
      { label: 'Cocok untuk', value: 'Semua usia' },
    ],
    description: 'Susu kambing nutrisi tinggi untuk mendukung kesehatan tulang, sendi, dan stamina keluarga.',
  },
  {
    id: 'promaster',
    icon: '⭐',
    name: 'Program Pro Master',
    benefit: 'Paket lengkap 1 bulan',
    tag: 'Best Seller',
    info: [
      { label: 'Isi Paket', value: 'Sevel+Gamat+Madu+MHS' },
      { label: 'Durasi', value: '1 bulan penuh' },
      { label: 'Manfaat', value: 'Regenerasi sel maksimal' },
      { label: 'Status', value: 'Best Seller ⭐' },
    ],
    description: 'Paket terpilih untuk hasil optimal dengan kombinasi produk unggulan HNI dalam satu paket praktis.',
  },
];

const quickQuestions = [
  'Saya sering nyeri lutut dan sendi',
  'Saya mudah lelah dan kurang stamina',
  'Imunitas saya lemah sering sakit',
];

const Selling = () => {
  const [selectedProduct, setSelectedProduct] = useState('promaster');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Assalamu’alaikum! 👋 Saya siap membantu Kakak menemukan produk HNI yang paling tepat. Ceritakan dulu, ada keluhan kesehatan apa yang ingin diatasi?',
      time: 'Baru saja',
    },
  ]);
  const [chatInput, setChatInput] = useState('');
  const [quickVisible, setQuickVisible] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    document.body.classList.add('frontend-body');
    return () => document.body.classList.remove('frontend-body');
  }, []);

  const product = products.find((item) => item.id === selectedProduct) || products[0];

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

  const orderProduct = () => {
    const msg = `Assalamu'alaikum, saya ingin pesan ${product.name} dari HNI. Mohon info ketersediaan dan harganya.`;
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div>
      <FrontendNavbar title="Selling" />
      <div className="hero-selling">
        <div className="page-badge hijau">🛒 Konsultasi Produk</div>
        <h1 className="page-title">Temukan Produk yang Tepat</h1>
        <p className="page-sub">Ceritakan keluhan Anda, AI kami akan merekomendasikan produk HNI yang paling cocok</p>
      </div>
      <div className="main-layout selling">
        <div className="produk-list">
          <h3>Pilih Produk untuk Info Lengkap</h3>
          <div className="produk-grid">
            {products.map((item) => (
              <button
                type="button"
                key={item.id}
                className={`produk-card ${selectedProduct === item.id ? 'active' : ''}`}
                onClick={() => setSelectedProduct(item.id)}
              >
                <div className="p-icon">{item.icon}</div>
                <div className="p-nama">{item.name}</div>
                <div className="p-manfaat">{item.benefit}</div>
                <div className="p-tag">{item.tag}</div>
              </button>
            ))}
          </div>
          <div className={`produk-detail ${selectedProduct ? 'show' : ''}`}>
            <div className="detail-title">{product.name}</div>
            <div className="detail-info">
              {product.info.map((item) => (
                <div key={item.label} className="info-item">
                  <div className="info-label">{item.label}</div>
                  <div className="info-val">{item.value}</div>
                </div>
              ))}
            </div>
            <p>{product.description}</p>
            <button type="button" className="btn-order" onClick={orderProduct}>Pesan Sekarang via WhatsApp →</button>
          </div>
        </div>
        <div className="chat-panel">
          <div className="chat-header">
            <div className="chat-avatar">🌿</div>
            <div className="chat-info">
              <h4>AI Sales Consultant</h4>
              <p>● Online – Siap membantu</p>
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
              <button key={question} type="button" className="quick-btn hijau" onClick={() => sendMessage(question)}>{question}</button>
            ))}
          </div>
          <div className="chat-input-area">
            <input
              value={chatInput}
              onChange={(event) => setChatInput(event.target.value)}
              className="chat-input hijau"
              placeholder="Ceritakan keluhan Anda..."
              onKeyDown={(event) => event.key === 'Enter' && sendMessage(chatInput)}
            />
            <button type="button" className="chat-send hijau" onClick={() => sendMessage(chatInput)}>
              <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selling;
