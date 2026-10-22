# AGENT.md — Panduan untuk AI Coding Agent

Dokumen ini berisi konteks dan aturan kerja bagi agen AI (Claude Code, dsb.) yang mengerjakan proyek **Smart Tourism Sukamara**.

## 1. Ringkasan Proyek

Website resmi pariwisata, kepemudaan, dan olahraga **Kabupaten Sukamara, Kalimantan Tengah**, dikelola Dinas Kepemudaan, Olahraga, dan Pariwisata (Disporapar). Fungsi: promosi destinasi, peta wisata digital, kalender event, berita, program pemuda & olahraga, galeri, dan layanan publik.

Dokumen terkait (baca sebelum bekerja):
- `PRD.md` — apa yang dibangun dan mengapa
- `DESIGN.md` — tampilan, token, komponen

Bila ada konflik: **PRD.md** menentukan fitur, **DESIGN.md** menentukan visual.

## 2. Stack yang Disarankan

> Arsitektur: **Zero-JS by default, Database-less, Static Edge Deployment**

| Lapisan | Pilihan | Keterangan |
|---|---|---|
| **Framework** | **Astro (v5) + TypeScript** | Arsitektur Islands, super ringan, HTML murni secara default, skor Lighthouse otomatis tinggi |
| **Styling** | **Tailwind CSS** | Token dari `DESIGN.md` didefinisikan di CSS variables & config Tailwind |
| **CMS** | **Git-based Headless CMS (Keystatic / Decap CMS)** | Panel admin visual di `/keystatic` tanpa butuh server/database terpisah. Tersinkron langsung dengan repository Git |
| **Database** | **Tidak Perlu (Flat-file via Astro Content Collections)** | Data disimpan dalam berkas Markdown/JSON terstruktur dengan validasi ketat via skema **Zod** |
| **Hosting & Deploy** | **Cloudflare Pages / Vercel / Netlify** | Output statis (`output: 'static'`) disajikan lewat Global Edge CDN. Biaya operasional nol, tahan lonjakan trafik, dan aman dari peretasan |
| **Peta** | **Leaflet + OpenStreetMap** | Dimuat sebagai Astro Island (`client:visible` atau `client:only`) tanpa ketergantungan API berbayar |
| **i18n** | **Astro i18n bawaan (`astro:i18n`)** | Routing dwibahasa: `id` (default), `en` |
| **Media** | **Astro `<Image />`** | Optimasi dan kompresi otomatis ke WebP/AVIF saat proses build |
| **Pencarian** | **Pagefind / Client Filter** | Pencarian teks statis instan tanpa membebani server |
| **Tes** | **Vitest + Playwright + axe-core** | Unit test, E2E, dan audit aksesibilitas otomatis |
| **CI/CD** | **GitHub Actions** | Otomatisasi lint, astro check, test, dan deploy |

## 3. Struktur Folder

```text
/src
  /components
    /ui                       # Button, Chip, Card, Modal, Input (Astro)
    /sections                 # Hero, QuickAccess, FeaturedDestinations, NewsAgenda, YouthSports, Stats, Gallery
    /layout                   # TopBar, Navbar, Footer
    /islands                  # Komponen interaktif: LeafletMap.astro (client:visible), SearchModal.astro
  /content                    # Astro Content Collections (skema Zod)
    /destinasi                # .md / .json per destinasi wisata
    /event                    # .md / .json agenda acara
    /berita                   # .md artikel berita & siaran pers
    /fasilitas-olahraga       # .json data sarana olahraga
    /organisasi-pemuda        # .json data komunitas/organisasi pemuda
    config.ts                 # Skema validasi Zod untuk seluruh koleksi
  /layouts                    # BaseLayout.astro, SiteLayout.astro
  /pages
    index.astro               # Beranda (Bahasa Indonesia)
    en/                       # Rute bahasa Inggris (Astro i18n)
      index.astro
      destinasi/
      ...
    destinasi/                # index.astro (daftar) & [slug].astro (detail)
    peta-wisata.astro         # Peta digital interaktif
    event/                    # index.astro & [slug].astro
    berita/                   # index.astro & [slug].astro
    pemuda.astro              # Direktori & program kepemudaan
    olahraga.astro            # Fasilitas & event olahraga
    layanan.astro             # Informasi layanan publik & FAQ
    galeri.astro              # Galeri foto & video
    keystatic/                # Rute panel admin Keystatic
  /styles                     # tokens.css, globals.css
  /utils                      # helper i18n, format tanggal, utilitas peta
/public
  /images
    /destinasi                # Foto lokal destinasi wisata (Pantai Citra, Tanjung Nipah, dll.)
    /branding                 # Logo Pemkab Sukamara, logo Disporapar
    /icons                    # Favicon, ikon kategori
/tests                        # Vitest & Playwright E2E
keystatic.config.ts           # Konfigurasi skema CMS Keystatic
astro.config.mjs              # Konfigurasi Astro (Tailwind, Image, i18n)
```

## 4. Perintah Standar

```bash
pnpm install        # pasang dependensi
pnpm dev            # server pengembangan (localhost:4321)
pnpm check          # astro check (type checking TypeScript & validasi koleksi konten)
pnpm build          # build produksi statis ke folder dist/
pnpm preview        # pratinjau lokal hasil build produksi
pnpm test           # unit test (Vitest)
pnpm test:e2e       # E2E test (Playwright)
```

Jalankan `pnpm check` dan `pnpm build` sebelum menyatakan pekerjaan selesai.

## 5. Aturan Kode

- TypeScript `strict`; hindari penggunaan `any`.
- Komponen `.astro` secara default tanpa JavaScript runtime di browser (*Zero-JS*).
- Gunakan client directive (`client:load`, `client:visible`, `client:idle`, `client:only`) hanya pada komponen yang benar-benar memerlukan interaktivitas browser (misal: Leaflet map, dropdown interaktif mobile, dialog pencarian).
- Seluruh pengambilan data konten menggunakan `getCollection('...')` atau `getEntry('...', '...')` dari `astro:content`.
- Gunakan **token desain** (warna, radius, spasi) sesuai `DESIGN.md` — jangan menulis sembarang nilai hex/pixel di komponen.
- Nama berkas komponen `PascalCase.astro`; utilitas `camelCase.ts`; rute `kebab-case`.
- Komentar hanya untuk menjelaskan alasan arsitektural ("mengapa"), bukan mengulang kode ("apa").
- Commit mengikuti standar Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`, `test:`).

## 6. Aturan UI & Konten

- Ikuti `DESIGN.md`: palet, tipografi, radius pill/kartu, bayangan lembut.
- Semua teks tampil lewat berkas terjemahan (`id`, `en`), bukan string langsung.
- Gambar wajib `alt`, ukuran eksplisit, `loading="lazy"` kecuali hero.
- Teks di atas foto harus tetap kontras (overlay gradasi).
- Gunakan elemen semantik; satu `h1` per halaman; urutan heading berurutan.
- Responsif mobile-first (breakpoint 640 / 1024).
- Hormati `prefers-reduced-motion`.

## 7. Aksesibilitas (wajib)

- Target WCAG 2.1 AA; jalankan `axe` pada halaman utama di CI.
- Navigasi penuh dengan keyboard; fokus terlihat.
- Fitur menu **Aksesibilitas**: ukuran teks, kontras tinggi, hentikan animasi.
- Carousel: tombol jeda, kontrol keyboard, `aria-live` sopan.

## 8. SEO & Performa

- Metadata per halaman (title, description, OG image), `sitemap.xml`, `robots.txt`.
- Structured data JSON-LD: `TouristAttraction`, `Event`, `NewsArticle`, `Organization`.
- Target Lighthouse mobile: Performance ≥ 85, Accessibility ≥ 95, SEO ≥ 95.
- LCP < 2,5 dtk: hero memakai `priority`, gambar berukuran sesuai, font di-preload.
- Hindari pustaka berat; pecah bundel per rute.

## 9. Keamanan & Privasi

- Jangan commit rahasia; gunakan `.env.local` dan sertakan `.env.example`.
- Validasi semua input formulir (server-side) + proteksi spam (honeypot / captcha ringan).
- Terapkan header keamanan (CSP, HSTS, X-Content-Type-Options, Referrer-Policy).
- Patuhi UU PDP: jangan simpan data pribadi tanpa kebutuhan; sediakan halaman Kebijakan Privasi.
- Sanitasi konten rich-text dari CMS sebelum dirender.

## 10. Data & Konten Awal

Gunakan data contoh dari desain bila data asli belum tersedia, dan tandai jelas sebagai *placeholder*:

- **Destinasi:** Pantai Citra (Wisata Bahari), Pantai Anugerah (Wisata Bahari), Ekowisata Mangrove (Wisata Alam), Taman Kota Sukamara (Wisata Budaya)
- **Event:** Festival Bahari Sukamara 2026 (20 Okt), Gelar Seni dan Budaya Sukamara (28 Okt), Sukamara Fun Run 2026 (12 Nov), Pelatihan Digital Kreatif untuk Pemuda (18 Nov)
- **Kontak:** Jl. Tjilik Riwut No. 01 Sukamara, Kalimantan Tengah 74772 · (0532) 26710 · info@sukamarakab.go.id

Jangan mengarang data statistik, harga tiket, jam buka, atau koordinat; minta konfirmasi dari pengelola.

## 11. Cara Kerja Agen

1. Baca `PRD.md` dan `DESIGN.md`, lalu ringkas rencana singkat sebelum menulis kode.
2. Kerjakan per **vertical slice** (mis. Hero → Akses Cepat → Destinasi → …), bukan seluruh situs sekaligus.
3. Untuk setiap komponen: implementasi → tes/stories → cek aksesibilitas → cek responsif.
4. Jika spesifikasi ambigu atau tidak ada di PRD/DESIGN, ajukan satu pertanyaan ringkas atau ambil asumsi paling wajar dan **catat asumsinya** di deskripsi PR.
5. Jangan mengubah dependensi besar, skema data, atau konfigurasi deploy tanpa persetujuan.
6. Jangan menghapus berkas/data pengguna tanpa konfirmasi.
7. Setelah selesai, laporkan: apa yang berubah, cara menjalankan/menguji, serta hal yang belum selesai.

## 12. Definition of Done

- [ ] Sesuai PRD & DESIGN
- [ ] Lint, typecheck, dan tes lulus
- [ ] Responsif di 375 / 768 / 1280 px
- [ ] Lulus pemeriksaan `axe` tanpa pelanggaran serius
- [ ] Teks lewat i18n (ID & EN)
- [ ] Metadata SEO terisi
- [ ] Tidak ada rahasia atau data placeholder yang bocor ke produksi