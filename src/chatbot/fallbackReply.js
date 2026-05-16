const normalize = (text) =>
  (text ?? '')
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ');

const containsAny = (text, needles) => needles.some((n) => text.includes(n));

const kneePainReply = () =>
  [
    "Baik, saya bantu ya. Nyeri lututnya sudah berapa lama dan terasa di bagian mana (depan/samping/belakang)?",
    '',
    'Agar saya arahkan produk yang tepat, boleh info juga:',
    '1) Usia & berat badan (perkiraan)',
    '2) Ada bengkak/kemerahan/terasa panas?',
    '3) Nyeri muncul saat naik tangga/jongkok/berdiri lama?',
    '',
    'Sementara ini yang biasanya dibantu:',
    '- Dukungan sendi: Kapsul Gamat (untuk sendi/kolagen)',
    '- Nutrisi tulang: EGM Susu Kambing (kalsium/protein)',
    '- Oles: Minyak Herba Sinergi untuk pegal/nyeri',
    '',
    'Jika nyeri sangat hebat, ada cedera jatuh, atau bengkak besar, sebaiknya periksa dokter/RS dulu ya.',
  ].join('\n');

const egmReply = () =>
  [
    'EGM (susu kambing) adalah susu kambing bubuk sebagai nutrisi harian.',
    '',
    'Biasanya dipilih untuk:',
    '- Dukungan tulang & sendi (kalsium/protein)',
    '- Nutrisi pemulihan setelah aktivitas',
    '',
    'Cara minum umumnya: seduh 1 sachet sesuai aturan di kemasan (pagi/malam).',
    'Kalau Anda punya alergi susu/riwayat asma alergi, mulai dari takaran kecil dulu ya.',
  ].join('\n');

const registerReply = () =>
  [
    'Bisa. Untuk daftar jadi member/distributor HNI, biasanya perlu data:',
    '- Nama',
    '- No. WhatsApp',
    '- Kota domisili',
    '- Minat (konsumsi pribadi / bisnis / keduanya)',
    '',
    'Silakan isi form “Bergabung” di halaman ini, nanti otomatis diarahkan ke WhatsApp admin.',
  ].join('\n');

const priceReply = () =>
  [
    'Untuk info harga, saya butuh nama produknya dulu ya (contoh: EGM / Kapsul Gamat / Madu Multiflora).',
    '',
    'Harga bisa beda tergantung promo & wilayah. Sebutkan juga kota Anda supaya saya bisa kasih estimasi yang tepat.',
  ].join('\n');

const programReply = () =>
  [
    'Program Pro Master adalah paket 1 bulan untuk dukung regenerasi & stamina.',
    'Isi paketnya biasanya: Kopi Sevel + Kapsul Gamat + Madu Multiflora + Minyak Herba Sinergi (MHS).',
    '',
    'Kalau Anda cerita keluhan utamanya (mis. nyeri lutut / daya tahan / maag / kolesterol), saya bisa bantu atur pemakaiannya.',
  ].join('\n');

const defaultReply = () =>
  [
    'Siap, saya bantu.',
    'Keluhannya tentang apa ya? (contoh: nyeri sendi, lambung, asam urat, kolesterol, atau info produk).',
  ].join('\n');

export function getFallbackReply(message) {
  const text = normalize(message);
  if (!text) return defaultReply();

  if (
    containsAny(text, [
      'nyeri lutut',
      'sakit lutut',
      'lutut nyeri',
      'pengapuran',
      'sendi',
      'osteo',
      'asam urat',
    ])
  ) {
    return kneePainReply();
  }

  if (containsAny(text, ['egm', 'susu kambing', 'goat milk', 'etta'])) {
    return egmReply();
  }

  if (containsAny(text, ['daftar', 'member', 'distributor', 'bergabung', 'join'])) {
    return registerReply();
  }

  if (containsAny(text, ['harga', 'berapa', 'price', 'promo'])) {
    return priceReply();
  }

  if (containsAny(text, ['pro master', 'program'])) {
    return programReply();
  }

  return defaultReply();
}

