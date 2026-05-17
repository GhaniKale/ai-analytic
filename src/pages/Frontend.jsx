import { useEffect } from 'react';
import '../assets/frontend.css';
import FrontendNavbar from '../components/FrontendNavbar';

export default function Frontend() {
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
      <FrontendNavbar title="Business" />

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
            <div className="produk-image-container">
              <img src="/products/gamat.png" alt="Kapsul Gamat" className="produk-image" />
            </div>
            <div className="produk-tag">Sendi & Tulang</div>
            <div className="produk-nama">Kapsul Gamat</div>
            <div className="produk-manfaat">Meredakan nyeri sendi, pengapuran lutut, dan mempercepat penyembuhan luka. Kaya kolagen tipe II dan omega-3.</div>
            <div className="produk-harga">Rp 130.000</div>
            <div className="produk-btn">Beli / Tanya Detail</div>
          </div>
          <div className="produk-card reveal" onClick={() => sendChatMessage('Ceritakan tentang Madu Multiflora HNI')}>
            <div className="produk-image-container">
              <img src="/products/madu.png" alt="Madu Multiflora" className="produk-image" />
            </div>
            <div className="produk-tag">Imunitas</div>
            <div className="produk-nama">Madu Multiflora</div>
            <div className="produk-manfaat">Menjaga daya tahan tubuh, sumber energi alami, dan melindungi dari radikal bebas. 100% madu murni.</div>
            <div className="produk-harga">Rp 100.000</div>
            <div className="produk-btn">Beli / Tanya Detail</div>
          </div>
          <div className="produk-card reveal" onClick={() => sendChatMessage('Apa manfaat Minyak Herba Sinergi?')}>
            <div className="produk-image-container">
              <img src="/products/mhs.png" alt="Minyak Herba Sinergi" className="produk-image" />
            </div>
            <div className="produk-tag">P3K Keluarga</div>
            <div className="produk-nama">Minyak Herba Sinergi</div>
            <div className="produk-manfaat">Minyak P3K keluarga untuk pegal linu, masuk angin, memar, dan gigitan serangga. Praktis dibawa kemana saja.</div>
            <div className="produk-harga">Rp 45.000</div>
            <div className="produk-btn">Beli / Tanya Detail</div>
          </div>
          <div className="produk-card reveal" onClick={() => sendChatMessage('Saya mau tahu tentang Kopi Sevel Stamina')}>
            <div className="produk-image-container">
              <img src="/products/kopi.png" alt="Kopi Sevel Stamina" className="produk-image" />
            </div>
            <div className="produk-tag">Stamina & Fokus</div>
            <div className="produk-nama">Kopi 7 Elemen</div>
            <div className="produk-manfaat">Kopi herbal 7 elemen dengan jahe merah, pasak bumi, dan daun kelor. Tanpa gula buatan, pakai stevia.</div>
            <div className="produk-harga">Rp 110.000</div>
            <div className="produk-btn">Beli / Tanya Detail</div>
          </div>
          <div className="produk-card reveal" onClick={() => sendChatMessage('Apa itu EGM susu kambing HNI?')}>
            <div className="produk-image-container">
              <img src="/products/egm.png" alt="EGM Susu Kambing" className="produk-image" />
            </div>
            <div className="produk-tag">Nutrisi Harian</div>
            <div className="produk-nama">Etta Goat Milk</div>
            <div className="produk-manfaat">Nutrisi lengkap untuk tulang dan sendi. Sangat baik dikombinasikan dengan Kapsul Gamat untuk hasil optimal.</div>
            <div className="produk-harga">Rp 75.000</div>
            <div className="produk-btn">Beli / Tanya Detail</div>
          </div>
          <div className="produk-card reveal" onClick={() => sendChatMessage('Apakah HNI punya produk lain selain yang disebutkan?')}>
            <div className="produk-image-container">
              <img src="/products/other.png" alt="Produk Lainnya" className="produk-image" style={{ objectFit: 'contain', padding: '20px' }} />
            </div>
            <div className="produk-tag">Lihat Semua</div>
            <div className="produk-nama">95+ Produk Lainnya</div>
            <div className="produk-manfaat">Spirulina, Bilberry, PGH, Sabun Herbal, Kosmetik Halal, dan masih banyak lagi. Semua halal bersertifikat MUI.</div>
            <div className="produk-btn" style={{marginTop: '16px'}}>Jelajahi Katalog</div>
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
            <div className="paket-item"><img src="/products/kopi.png" alt="Kopi 7 Elemen" className="paket-image" /><div className="paket-nama">Kopi 7 Elemen</div></div>
            <div className="paket-plus">+</div>
            <div className="paket-item"><img src="/products/gamat.png" alt="Kapsul Gamat" className="paket-image" /><div className="paket-nama">Kapsul Gamat</div></div>
            <div className="paket-plus">+</div>
            <div className="paket-item"><img src="/products/madu.png" alt="Madu Multiflora" className="paket-image" /><div className="paket-nama">Madu Multiflora</div></div>
            <div className="paket-plus">+</div>
            <div className="paket-item"><img src="/products/mhs.png" alt="Minyak Herba Sinergi" className="paket-image" /><div className="paket-nama">MHS</div></div>
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
    </div>
  );
}
