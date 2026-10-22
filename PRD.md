# PRD — Smart Tourism Sukamara

| | |
|---|---|
| **Produk** | Website resmi Smart Tourism Sukamara |
| **Pemilik** | Dinas Kepemudaan, Olahraga, dan Pariwisata (Disporapar) Kab. Sukamara, Pemerintah Kabupaten Sukamara |
| **Versi** | 1.0 (draf) |
| **Tanggal** | 21 Oktober 2026 |
| **Status** | Draf untuk ditinjau |

---

## 1. Latar Belakang

Kabupaten Sukamara (Kalimantan Tengah) memiliki potensi wisata bahari, alam (mangrove), dan budaya, serta program kepemudaan dan olahraga. Informasi saat ini tersebar dan belum terintegrasi, sehingga pemasaran destinasi kurang efektif dan wisatawan sulit menemukan informasi lengkap (lokasi, event, fasilitas).

**Smart Tourism Sukamara** adalah portal terpadu sebagai *strategi integrasi pemasaran destinasi wisata* — satu pintu untuk destinasi, peta digital, event, berita, kepemudaan, olahraga, dan layanan publik.

## 2. Tujuan

### Tujuan produk
1. Mempromosikan destinasi unggulan Sukamara secara menarik dan mudah ditemukan.
2. Menyediakan informasi wisata yang akurat dan mutakhir (destinasi, peta, event).
3. Mengintegrasikan informasi kepemudaan dan olahraga dalam satu portal.
4. Menyediakan kanal informasi dan pengaduan layanan publik terkait sektor ini.
5. Menjadi sumber data kunjungan dan minat wisatawan untuk pengambilan keputusan.

### Metrik keberhasilan (6 bulan pasca-peluncuran)
| Metrik | Target |
|---|---|
| Pengunjung unik bulanan | ≥ 10.000 |
| Rasio pentalan (bounce) beranda | ≤ 55% |
| Klik "Jelajahi Destinasi" / "Lihat Peta Wisata" dari hero | ≥ 12% sesi |
| Pendaftaran kegiatan pemuda via web | ≥ 300 |
| Lighthouse mobile (Perf / A11y / SEO) | ≥ 85 / ≥ 95 / ≥ 95 |
| Kelengkapan data destinasi (foto, lokasi, deskripsi) | 100% dari 25+ destinasi |
| Waktu publikasi berita/event oleh admin | < 10 menit |

## 3. Non-Tujuan (v1)

- Pemesanan tiket/akomodasi dan transaksi pembayaran online.
- Aplikasi mobile native (cukup responsif mobile-first web).
- Pengelolaan database server terpisah (PostgreSQL/MySQL) yang memerlukan pemeliharaan server 24/7 — digantikan dengan Git-based flat-file CMS via Astro Content Collections.
- Akun publik dengan profil lengkap (kecuali pendaftaran kegiatan sederhana via formulir/webhook).
- Integrasi sistem keuangan pemerintah.

## 4. Pengguna & Kebutuhan

| Persona | Kebutuhan utama |
|---|---|
| **Wisatawan lokal/luar daerah** | Menemukan destinasi, lokasi di peta, event terdekat, informasi praktis |
| **Warga & komunitas pemuda** | Info program, pendaftaran kegiatan, profil prestasi |
| **Atlet & pegiat olahraga** | Fasilitas olahraga, jadwal event, prestasi |
| **Pelaku usaha wisata** | Tampil di peta/destinasi, informasi event |
| **Admin/Editor Disporapar** | Mengelola konten dengan mudah tanpa keahlian teknis |
| **Pimpinan/Pemda** | Melihat statistik dan kinerja promosi |
| **Media/Jurnalis** | Siaran pers, galeri resmi |

## 5. Ruang Lingkup Fitur

Prioritas: **P0** wajib rilis awal · **P1** penting · **P2** pengembangan lanjut.

### 5.1 Global
| ID | Fitur | Deskripsi | Prioritas |
|---|---|---|---|
| G-01 | Top bar | Label "Website Resmi Pemerintah Kabupaten Sukamara", Aksesibilitas, bahasa, cari cepat | P0 |
| G-02 | Navbar | Beranda, Destinasi, Peta Wisata, Event, Pemuda, Olahraga, Berita, Layanan (dropdown) | P0 |
| G-03 | Pencarian global | Cari destinasi, event, berita, layanan dengan hasil terkelompok | P0 |
| G-04 | Dwibahasa | Indonesia (default) & Inggris | P1 |
| G-05 | Fitur aksesibilitas | Ukuran teks, kontras tinggi, hentikan animasi | P0 |
| G-06 | Footer | Kontak, tautan cepat, media sosial, peta lokasi, kebijakan | P0 |

### 5.2 Beranda
| ID | Fitur | Deskripsi | Prioritas |
|---|---|---|---|
| H-01 | Hero carousel | Foto unggulan, judul, tagline, slogan "Sukamara Janga", kolom cari, CTA | P0 |
| H-02 | Akses cepat | 6 kartu: Destinasi Unggulan, Peta Wisata Digital, Kalender Event, Kepemudaan, Olahraga, Layanan Publik | P0 |
| H-03 | Destinasi unggulan | 4 kartu dengan kategori & lokasi + "Lihat Semua" | P0 |
| H-04 | Berita terbaru | 3 berita (kategori, tanggal, judul, ringkasan) | P0 |
| H-05 | Agenda mendatang | 4 event terdekat otomatis dari data event | P0 |
| H-06 | Kepemudaan & Olahraga | 4 kartu: Organisasi Kepemudaan, Fasilitas Olahraga, Pendaftaran Kegiatan, Prestasi & Inspirasi | P0 |
| H-07 | Data & potensi | Statistik (destinasi, event tahunan, komunitas pemuda, fasilitas olahraga) dihitung dari data | P1 |
| H-08 | Galeri foto & video | Strip 6 media, buka lightbox/video | P1 |

### 5.3 Destinasi
| ID | Fitur | Deskripsi | Prioritas |
|---|---|---|---|
| D-01 | Daftar destinasi | Filter kategori (Bahari, Alam, Budaya, Kuliner), kecamatan; urut; pencarian | P0 |
| D-02 | Detail destinasi | Galeri, deskripsi, lokasi & peta mini, jam buka, tiket, fasilitas, akses, kontak, destinasi terdekat, tombol bagikan | P0 |
| D-03 | Ulasan/rating | Penilaian pengunjung dengan moderasi | P2 |

### 5.4 Peta Wisata Digital
| ID | Fitur | Deskripsi | Prioritas |
|---|---|---|---|
| M-01 | Peta interaktif | Penanda destinasi, fasilitas, event; filter kategori; pop-up ringkas | P0 |
| M-02 | Petunjuk arah | Tautan ke aplikasi peta eksternal | P0 |
| M-03 | Lokasi saya | Urutkan berdasarkan jarak (dengan izin pengguna) | P1 |
| M-04 | Rute tematik | Rute wisata yang disarankan (mis. 1 hari bahari) | P2 |

### 5.5 Event
| ID | Fitur | Deskripsi | Prioritas |
|---|---|---|---|
| E-01 | Kalender event | Tampilan daftar & kalender bulanan, filter jenis (Wisata, Budaya, Olahraga, Pemuda) | P0 |
| E-02 | Detail event | Waktu, lokasi, deskripsi, penyelenggara, poster, tombol "Tambah ke kalender" (.ics) | P0 |
| E-03 | Pengingat | Langganan notifikasi email event | P2 |

### 5.6 Kepemudaan
| ID | Fitur | Deskripsi | Prioritas |
|---|---|---|---|
| Y-01 | Direktori organisasi & komunitas | Profil, kontak, kegiatan | P0 |
| Y-02 | Program & pendaftaran kegiatan | Daftar program, formulir pendaftaran, konfirmasi email | P1 |
| Y-03 | Profil prestasi & inspirasi | Cerita pemuda berprestasi | P1 |

### 5.7 Olahraga
| ID | Fitur | Deskripsi | Prioritas |
|---|---|---|---|
| O-01 | Direktori fasilitas | Lapangan/gedung, lokasi, jam, kontak, foto | P0 |
| O-02 | Event & kejuaraan | Terhubung ke modul event | P0 |
| O-03 | Prestasi atlet | Profil & capaian | P1 |

### 5.8 Berita & Informasi
| ID | Fitur | Deskripsi | Prioritas |
|---|---|---|---|
| B-01 | Daftar & detail berita | Kategori: Berita Wisata, Informasi, Kegiatan; tag; berita terkait | P0 |
| B-02 | Pengumuman | Banner pengumuman penting | P1 |
| B-03 | Siaran pers & unduhan | Dokumen publik (PDF) | P1 |

### 5.9 Layanan Publik
| ID | Fitur | Deskripsi | Prioritas |
|---|---|---|---|
| L-01 | Pengaduan & informasi | Formulir pengaduan/pertanyaan dengan nomor tiket | P1 |
| L-02 | Informasi layanan | Prosedur, persyaratan, kontak | P0 |
| L-03 | FAQ | Pertanyaan umum | P1 |

### 5.10 Galeri
| ID | Fitur | Deskripsi | Prioritas |
|---|---|---|---|
| Q-01 | Galeri foto & video | Album per destinasi/event, lightbox, embed YouTube | P1 |

### 5.11 Panel Admin (Headless CMS Ringan)
| ID | Fitur | Deskripsi | Prioritas |
|---|---|---|---|
| A-01 | Autentikasi Pengelola | Akses admin via GitHub/SSO/password (Keystatic/Decap) | P0 |
| A-02 | Manajemen Konten (CRUD) | Kelola destinasi, event, berita, galeri, fasilitas, organisasi via form visual | P0 |
| A-03 | Format Flat-file & Validasi Zod | Konten tersimpan sebagai Markdown/JSON di repo, divalidasi skema Zod otomatis | P0 |
| A-04 | Unggah Media & Kompresi | Unggah foto langsung masuk ke aset repo, kompresi otomatis ke WebP/AVIF saat build | P0 |
| A-05 | Pengelolaan Hero & Akses Cepat | Pengaturan banner unggulan & tautan cepat melalui CMS | P1 |
| A-06 | Penentuan Titik Koordinat Peta | Input latitude/longitude destinasi & fasilitas | P0 |
| A-07 | Status Draf & Terbit | Menyimpan draf atau langsung memicu build produksi otomatis | P1 |

## 6. Alur Pengguna Utama

1. **Wisatawan menemukan destinasi:** Beranda → cari/kartu destinasi → detail → "Lihat di peta" → petunjuk arah.
2. **Merencanakan kunjungan:** Beranda → Agenda mendatang → detail event → tambah ke kalender.
3. **Pemuda mendaftar kegiatan:** Beranda → Kepemudaan → Pendaftaran Kegiatan → isi formulir → konfirmasi email.
4. **Editor menerbitkan berita:** Login CMS → Berita baru → isi & unggah foto → pratinjau → terbitkan/jadwalkan.

## 7. Persyaratan Non-Fungsional

| Area | Persyaratan |
|---|---|
| **Performa** | LCP < 1,5 dtk di 4G; Zero-JS default dengan Astro Islands; gambar WebP/AVIF responsif otomatis |
| **Aksesibilitas** | WCAG 2.1 AA |
| **Responsif** | 360 px hingga layar lebar; mobile-first (mayoritas pengguna di ponsel) |
| **Kompatibilitas** | 2 versi terbaru Chrome, Edge, Firefox, Safari; Android 9+, iOS 15+ |
| **Keamanan** | Static HTML generated — kebal serangan database/SQL injection; HTTPS, header keamanan standar |
| **Privasi** | Sesuai UU PDP; kebijakan privasi; tanpa pelacak berlebihan |
| **Ketersediaan** | Uptime ≥ 99,9% via Global Edge CDN (Cloudflare Pages / Vercel / Netlify) |
| **SEO** | Metadata, sitemap.xml otomatis, JSON-LD, URL ramah (`/destinasi/pantai-citra`) |
| **Skalabilitas** | Static output di Edge CDN; tahan lonjakan trafik viral tanpa lonjakan biaya server |
| **Keterpeliharaan** | Tipe ketat TypeScript & Zod schema, zero database maintenance |
| **Konektivitas rendah** | Halaman tetap dapat dibaca tanpa menunggu JavaScript selesai diunduh |

## 8. Model Data (ringkas)

- **Destinasi:** nama, slug, kategori, deskripsi, alamat, kecamatan, koordinat, jam buka, tiket, fasilitas[], galeri[], kontak, status.
- **Event:** judul, slug, jenis, tanggal mulai/selesai, lokasi (relasi destinasi/teks), deskripsi, poster, penyelenggara, tautan pendaftaran.
- **Berita:** judul, slug, kategori, tanggal terbit, ringkasan, isi, gambar, tag, penulis.
- **Fasilitas Olahraga:** nama, jenis, alamat, koordinat, jam, kontak, foto.
- **Organisasi/Komunitas Pemuda:** nama, deskripsi, kontak, kegiatan, logo.
- **Program/Kegiatan:** judul, deskripsi, kuota, periode pendaftaran, status.
- **Pendaftaran:** nama, kontak, kegiatan, waktu, status.
- **Prestasi:** nama, bidang, capaian, tahun, foto, cerita.
- **Media Galeri:** jenis (foto/video), berkas/URL, keterangan, relasi.
- **Pengaduan:** nama, kontak, kategori, isi, status, nomor tiket.
- **Pengguna CMS:** nama, email, peran.

## 9. Analitik & Pengukuran

- Analitik privasi-ramah (mis. Plausible/Matomo) atau GA4 dengan persetujuan.
- Peristiwa kunci: pencarian, klik CTA hero, klik kartu akses cepat, buka peta, klik petunjuk arah, tambah ke kalender, kirim formulir.
- Laporan bulanan ke pimpinan Disporapar.

## 10. Asumsi, Risiko, dan Ketergantungan

| Item | Keterangan | Mitigasi |
|---|---|---|
| Ketersediaan konten | Foto/teks destinasi mungkin belum lengkap | Sesi pengumpulan konten sejak awal; template konten; placeholder bertanda |
| Kapasitas editor | SDM terbatas untuk memperbarui konten | CMS sederhana, pelatihan, panduan singkat |
| Akurasi data peta | Koordinat belum terverifikasi | Survei/validasi lapangan oleh Disporapar |
| Hosting & domain | Platform Edge Hosting (Cloudflare Pages / Vercel / Netlify) dengan subdomain bawaan (mis. `*.pages.dev` / `*.vercel.app`); custom domain resmi (`.go.id` / `.id`) dapat dipasang kapan saja tanpa migrasi | Cukup arahkan CNAME/DNS saat domain resmi sudah diputuskan; tahap awal live dengan subdomain platform |
| Hak cipta foto | Foto harus berlisensi/milik sendiri | Pakai foto resmi, kredit fotografer |
| Koneksi pengguna | Sinyal lemah di beberapa area | Optimasi performa, halaman ringan |
| Keamanan situs pemerintah | Target serangan umum | Pembaruan rutin, WAF, pencadangan, uji keamanan sebelum rilis |

## 11. Rencana Rilis

| Fase | Cakupan | Perkiraan |
|---|---|---|
| **0 — Persiapan** | Finalisasi PRD, desain, aset, struktur konten | Minggu 1–2 |
| **1 — MVP (P0)** | Beranda, Destinasi, Peta, Event, Berita, Fasilitas Olahraga, Direktori Pemuda, Layanan info, CMS dasar, aksesibilitas | Minggu 3–8 |
| **2 — Penguatan (P1)** | Dwibahasa, pendaftaran kegiatan, pengaduan, galeri, statistik, prestasi, penjadwalan konten | Minggu 9–12 |
| **3 — Pengembangan (P2)** | Ulasan, rute tematik, pengingat email, dasbor analitik | Setelah rilis |

**UAT & peluncuran:** uji dengan Disporapar dan perwakilan komunitas (minggu 11–12), uji keamanan & performa, pelatihan editor, lalu peluncuran bertahap.

## 12. Kriteria Penerimaan (MVP)

- [ ] Seluruh fitur P0 berfungsi di Chrome, Safari, Firefox (desktop & mobile)
- [ ] Beranda sesuai `DESIGN.md` pada 375 / 768 / 1280 px
- [ ] Minimal 10 destinasi lengkap (foto, deskripsi, koordinat) dan 5 event terisi
- [ ] Peta menampilkan semua destinasi dengan filter kategori
- [ ] Editor dapat menerbitkan berita & event tanpa bantuan developer
- [ ] Lighthouse mobile: Performance ≥ 85, Accessibility ≥ 95, SEO ≥ 95
- [ ] Uji keamanan dasar lulus; HTTPS & pencadangan aktif
- [ ] Kebijakan Privasi & Syarat Penggunaan terbit

## 13. Pertanyaan Terbuka

1. Apakah pendaftaran kegiatan pemuda memerlukan verifikasi (NIK/akun) atau cukup formulir?
2. Siapa pemilik tiap jenis konten (wisata, pemuda, olahraga) dan alur persetujuannya?
3. Apakah diperlukan integrasi dengan portal resmi Pemkab Sukamara (SSO, tautan layanan)?
4. Apakah akan ada data tiket/tarif resmi yang ditampilkan, dan siapa yang memperbaruinya?
5. Domain resmi belum ditentukan: Aplikasi siap dideploy langsung menggunakan subdomain gratis platform (misal `*.pages.dev` / `*.vercel.app`), dan domain kustom dapat dihubungkan kemudian dengan satu langkah pengaturan DNS.
6. Bahasa tambahan selain ID/EN yang dibutuhkan?