# DESIGN.md — Smart Tourism Sukamara

Panduan desain untuk website resmi **Smart Tourism Sukamara** (Pemerintah Kabupaten Sukamara · Disporapar). Dokumen ini diturunkan dari desain beranda dan menjadi acuan visual untuk seluruh halaman.

---

## 1. Karakter Desain

- **Nuansa:** segar, tropis, modern, tetap resmi (website pemerintah).
- **Kata kunci:** alam, senja, air, hijau mangrove, hangat, ramah, tepercaya.
- **Prinsip:**
  1. *Visual-first* — foto destinasi berkualitas tinggi menjadi pusat perhatian.
  2. *Cepat ditemukan* — pencarian dan akses cepat selalu terlihat di atas lipatan.
  3. *Resmi tapi hangat* — struktur rapi, warna cerah, sudut membulat.
  4. *Inklusif* — dapat diakses (menu Aksesibilitas, kontras cukup, dwibahasa).

## 2. Warna

> Nilai hex adalah perkiraan dari desain; sesuaikan dengan aset brand resmi bila tersedia.

| Token | Hex | Penggunaan |
|---|---|---|
| `--navy-900` | `#0B2A5B` | Top bar, footer, judul section, teks utama |
| `--blue-600` | `#1E5FD8` | Link, tombol sekunder, aksen judul ("SUKAMARA"), ikon |
| `--blue-100` | `#E6F0FF` | Latar chip kategori, latar tanggal event |
| `--magenta-600` | `#D6197A` | CTA utama (tombol "Cari"), huruf "O" pada logo hero, tag Budaya |
| `--teal-600` | `#0E9F8E` | Tombol "Jelajahi Destinasi", tag Wisata Alam/Bahari |
| `--green-600` | `#2E9E4F` | Ikon alam, tag Event Olahraga |
| `--orange-500` | `#F59E0B` | Aksen tanggal event, piala/prestasi |
| `--gray-700` | `#374151` | Teks isi |
| `--gray-500` | `#6B7280` | Teks deskripsi/sekunder |
| `--gray-100` | `#F3F6FA` | Latar section, garis pemisah |
| `--white` | `#FFFFFF` | Kartu, header |

**Warna tag kategori:** Wisata Bahari → biru; Wisata Alam → hijau/teal; Wisata Budaya → magenta; Berita Wisata → biru muda; Informasi → biru muda; Kegiatan → pink muda; Event Wisata → biru; Event Budaya → biru; Event Olahraga → hijau; Event Pemuda → oranye.

**Warna tanggal event:** kartu tanggal berlatar tint lembut (pink, biru, hijau, kuning) dengan angka tebal berwarna senada.

## 3. Tipografi

| Peran | Font (saran) | Ukuran desktop | Berat |
|---|---|---|---|
| Sapaan hero ("Selamat Datang di") | Script/handwriting (mis. *Sacramento*, *Allura*) | 32–40 px | Regular |
| Judul hero ("SMART TOURISM") | Sans geometris tebal (mis. *Plus Jakarta Sans*, *Poppins*) | 56–72 px | 800 |
| Subjudul hero ("SUKAMARA") | Sans, letter-spacing lebar | 28–32 px | 600 |
| H2 judul section | Sans | 24–28 px | 700 |
| H3 judul kartu | Sans | 16–18 px | 700 |
| Body | Sans | 14–16 px | 400 |
| Caption / meta | Sans | 12–13 px | 400–500 |
| Tag/chip | Sans, uppercase | 10–11 px | 700 |

- Line-height: judul 1.15–1.25, body 1.5–1.6.
- Judul section memakai pola **dua warna**: kata pertama navy, kata kunci (mis. "SUKAMARA") biru.
- Slogan "Sukamara Janga" memakai gaya script putih dengan teks kecil uppercase di bawahnya.

## 4. Grid, Spasi, dan Layout

- **Container:** maks. 1200 px, tengah, padding horizontal 24 px (desktop), 16 px (mobile).
- **Grid:** 12 kolom, gap 24 px.
- **Skala spasi (4 px base):** 4, 8, 12, 16, 24, 32, 48, 64, 96.
- **Jarak antar section:** 64–96 px desktop, 40–56 px mobile.
- **Radius:** kartu 12–16 px, tombol pill (999 px), input pill, chip 6 px, kartu quick-access 12 px.
- **Bayangan:** lembut — `0 4px 16px rgba(11,42,91,.08)`; hover naik ke `0 8px 24px rgba(11,42,91,.14)`.

## 5. Struktur Halaman Beranda (urutan)

1. **Top bar** (navy): teks "Website Resmi Pemerintah Kabupaten Sukamara", tombol Aksesibilitas, pemilih bahasa (ID/EN), kolom cari kecil.
2. **Header/Navbar** (putih): logo Pemkab Sukamara + logo Disporapar + logo program; menu: Beranda, Destinasi, Peta Wisata, Event, Pemuda, Olahraga, Berita, Layanan (dropdown). Item aktif bergaris bawah biru.
3. **Hero** (tinggi ±600 px, foto senja dermaga/mangrove, overlay gradasi kiri):
   - Sapaan script + judul "SMART TOURISM" + "SUKAMARA"
   - Tagline: *Strategi Integrasi Pemasaran Destinasi Wisata di Kabupaten Sukamara*
   - Kolom pencarian besar + tombol magenta "Cari"
   - 2 CTA: **Jelajahi Destinasi** (teal solid), **Lihat Peta Wisata** (outline biru, latar putih)
   - Slogan "Sukamara Janga" di kanan bawah
   - Indikator carousel (dot)
4. **Akses Cepat** (kartu putih menumpuk di tepi bawah hero, 6 kolom): Destinasi Unggulan, Peta Wisata Digital, Kalender Event, Kepemudaan, Olahraga, Layanan Publik — ikon berwarna + judul + deskripsi 2 baris.
5. **Destinasi Unggulan** (4 kartu): foto, chip kategori di atas foto, judul, deskripsi 2 baris, lokasi (ikon pin magenta), tombol panah bulat. Tautan "Lihat Semua Destinasi" (pill outline).
6. **Dua kolom:** *Berita & Informasi Terbaru* (3 item: thumbnail, kategori, tanggal, judul, ringkasan, panah) dan *Agenda Mendatang* (4 item: kartu tanggal, kategori, judul event, lokasi, panah).
7. **Kepemudaan & Olahraga** (4 kartu: foto + ikon lingkaran berwarna menimpa sudut kiri bawah foto + judul + deskripsi).
8. **Data & Potensi Wisata** (banner foto mangrove + panel statistik putih 4 angka: 25+ Destinasi, 10+ Event Tahunan, 50+ Komunitas Pemuda, 30+ Fasilitas Olahraga).
9. **Galeri Foto & Video** (strip 6 thumbnail; item terakhir bertanda ikon play).
10. **Footer** (navy): logo, alamat, telepon, email; Tautan Cepat (2 kolom); Ikut Kami (ikon Facebook, Instagram, YouTube, TikTok + hashtag #Sukamara_Janga); siluet peta Kalimantan Tengah dengan penanda Sukamara; baris hak cipta + Kebijakan Privasi, Syarat Penggunaan, Peta Situs.

## 6. Komponen

### Tombol
| Varian | Gaya |
|---|---|
| Primary (CTA cari) | Magenta solid, teks putih, pill, tinggi 40 px |
| Secondary (Jelajahi) | Teal solid + ikon, pill |
| Outline | Putih/transparan, border 1.5 px biru, teks biru, pill |
| Ikon bulat | 28–32 px, border biru muda, panah biru |
- Hover: gelapkan 8%, naik 1 px. Fokus: ring 3 px `rgba(30,95,216,.4)`.

### Kartu Destinasi
Foto rasio 4:3 (radius atas 12 px) · chip kategori absolut kiri-bawah foto · judul bold · deskripsi abu 2 baris (clamp) · baris lokasi · tombol panah. Hover: foto zoom 1.04, bayangan naik.

### Kartu Akses Cepat
Ikon 40–48 px berwarna (outline/duotone), judul bold navy 13–14 px, deskripsi 11–12 px abu. Hover: border biru muda + naik 2 px.

### Item Berita
Thumbnail 120×80 radius 8 px, chip kategori + ikon kalender + tanggal, judul 2 baris bold, ringkasan 2 baris, panah di kanan.

### Item Agenda
Kartu tanggal 72×64 (angka 28 px tebal + bulan uppercase kecil), chip kategori, judul bold, lokasi dengan ikon pin; panah kanan.

### Statistik
Ikon berwarna + angka 28 px bold navy + label 12 px abu; dipisah garis vertikal tipis.

### Input Pencarian
Pill putih, ikon kaca pembesar kiri, placeholder abu "Cari destinasi, event, berita, atau layanan…", tombol Cari magenta menyatu di kanan.

## 7. Ikonografi & Gambar

- Gaya ikon: outline/duotone membulat, stroke 1.75–2 px, warna sesuai kategori (biru, hijau, magenta, oranye).
- Judul section diawali ikon 28 px (daun, buku berita, kalender, pelari, kamera).
- Foto: lanskap, hangat, saturasi tinggi namun alami; fokus pada pantai, mangrove, dermaga, budaya (tari/kostum Dayak), komunitas pemuda, olahraga.
- Semua gambar: `alt` deskriptif, `loading="lazy"` (kecuali hero), format WebP/AVIF, rasio konsisten.

## 8. Gerak (Motion)

- Durasi 150–250 ms, easing `cubic-bezier(.2,.7,.2,1)`.
- Hero carousel: fade 600 ms, auto-play 6 dtk, jeda saat hover/fokus.
- Kartu: fade-up saat masuk viewport (opsional, hormati `prefers-reduced-motion`).
- Hindari animasi besar yang mengganggu keterbacaan.

## 9. Responsif

| Breakpoint | Lebar | Perilaku |
|---|---|---|
| Mobile | < 640 px | Navbar → hamburger; hero 1 kolom, judul 36–44 px; akses cepat 2 kolom; destinasi carousel horizontal; berita & agenda bertumpuk; statistik 2×2 |
| Tablet | 640–1023 px | Akses cepat 3 kolom; destinasi 2 kolom; berita/agenda bertumpuk |
| Desktop | ≥ 1024 px | Layout seperti desain; akses cepat 6 kolom; destinasi 4 kolom |

## 10. Aksesibilitas (target WCAG 2.1 AA)

- Kontras teks ≥ 4.5:1; teks di atas foto wajib memakai overlay gradasi.
- Semua elemen interaktif dapat diakses keyboard, fokus terlihat jelas.
- Menu **Aksesibilitas**: ukuran teks (A−/A/A+), kontras tinggi, hentikan animasi.
- Landmark HTML semantik (`header`, `nav`, `main`, `section`, `footer`), satu `h1` per halaman.
- Pemilih bahasa **ID / EN** dengan atribut `lang` yang benar.
- Target sentuh minimal 44×44 px di mobile.

## 11. Konten & Gaya Bahasa

- Bahasa Indonesia baku yang ramah, kalimat ringkas, aktif.
- Judul kartu ≤ 40 karakter; deskripsi ≤ 90 karakter.
- Format tanggal: `20 OKT 2026` (kartu), `15 Okt 2026` (berita).
- Slogan: **Sukamara Janga** — *Pesona Alam. Harmoni Budaya. Masa Depan Bersama.*
- Tagar resmi: `#Sukamara_Janga`.

## 12. Aset yang Diperlukan

Logo Pemkab Sukamara, logo Disporapar, logo program/badge, set ikon, foto destinasi (min. 1920 px lebar untuk hero), siluet peta Kalimantan Tengah, font (lisensi web), favicon & OG image.