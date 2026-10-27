# Smart Tourism Sukamara — Portal Resmi Pariwisata Kabupaten Sukamara

Portal web resmi pariwisata, kebudayaan, kepemudaan, dan olahraga Kabupaten Sukamara, Provinsi Kalimantan Tengah. Dibangun dengan fokus pada performa tinggi, desain responsif ramah seluler, navigasi interaktif, dan kemudahan pengelolaan konten dinamis berbasis Git CMS.

---

## 🚀 Fitur Utama

- **Hero & Carousel Interaktif:** Banner beranda dengan slider pemandangan alam Sukamara, slogan daerah, dan dock akses cepat (*Quick Access*).
- **Destinasi Unggulan & Modal Detail:** Katalog objek wisata (bahari, alam, budaya, religi) dilengkapi slider horizontal scroll-snap, tombol navigasi panah, filter kategori, dan modal interaktif dengan panduan rute Google Maps.
- **Peta Digital Wisata Interaktif:** Integrasi peta Leaflet menampilkan sebaran titik destinasi lengkap dengan marker koordinat dan pop-up informasi.
- **Agenda & Kalender Event Sukamara:** Jadwal festival tahunan, perayaan budaya, kompetisi olahraga, dan agenda pemuda dengan detail kegiatan dan integrasi Google Calendar.
- **Kepemudaan & Olahraga:** Galeri program pembinaan kepemudaan dan sarana olahraga dengan katalog program 2-layer serta narahubung resmi Disporapar.
- **Berita & Informasi Terkini:** Publikasi berita seputar pariwisata dan kegiatan daerah dengan pembaca artikel modal terpadu.
- **Galeri Foto & Video:** Koleksi lanskap alam Sukamara dengan penampil media Lightbox.
- **Banner Data & Potensi Wisata:** Statistik capaian dan potensi daerah di bagian penutup halaman.
- **Footer Dinamis Terintegrasi CMS:** Informasi kontak dinamis, alamat instansi, jam pelayanan, tautan sosial media resmi, dan hak cipta.
- **CMS Keystatic:** Dashboard konten langsung di `/keystatic` dengan dukungan Keystatic Cloud untuk staf tanpa akun GitHub.

---

## 🛠️ Tech Stack

- **Framework:** [Astro 5](https://astro.build/) (Static Site Generation + Server-Side Adapter)
- **Runtime & Adapter:** `@astrojs/node` (Standalone Mode)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/)
- **CMS Engine:** [Keystatic CMS](https://keystatic.com/) (Local Storage JSON Backend)
- **Icons:** [Lucide Astro](https://lucide.dev/)
- **Peta:** [Leaflet.js](https://leafletjs.com/) & OpenStreetMap
- **Bahasa:** TypeScript

---

## 📁 Struktur Direktori

```text
sukamara-tourism-web/
├── public/
│   ├── images/
│   │   ├── branding/         # Logo resmi Pemkab Sukamara
│   │   └── destinasi/        # Aset foto lanskap terkompresi
├── src/
│   ├── components/
│   │   ├── layout/           # Navbar, TopBar, QuickAccess, Footer
│   │   ├── sections/         # Hero, FeaturedDestinations, MapSection, EventsSection,
│   │   │                     # YouthSportsAndStats, NewsSection, Gallery, DataPotensiBanner
│   │   └── ui/               # Modal dialogs & lightbox components
│   ├── content/              # Data JSON dikelola oleh Keystatic CMS
│   │   ├── berita/
│   │   ├── destinasi/
│   │   ├── event/
│   │   ├── footer/
│   │   ├── galeri/
│   │   └── hero/
│   ├── data/                 # Data statis & tipe TypeScript
│   ├── layouts/              # BaseLayout.astro
│   ├── pages/                # index.astro
│   └── styles/               # globals.css
├── astro.config.mjs
├── keystatic.config.ts       # Definisi schema koleksi & singleton CMS
└── package.json
```

---

## 🔐 Akses CMS (Keystatic)

Akses dashboard konten dapat dilakukan langsung melalui:
- **URL CMS:** `/keystatic` (misal: `http://localhost:4321/keystatic` saat pengembangan)

### Lingkungan Lokal (Pengembangan)
Di lingkungan lokal, Keystatic otomatis berjalan dalam mode lokal (`kind: 'local'`). Anda dapat langsung mengedit dan menyimpan konten tanpa login akun apa pun.

### Lingkungan Produksi (Keystatic Cloud)
Di lingkungan produksi, Keystatic menggunakan **Keystatic Cloud** (`kind: 'cloud'`). Admin dan staf dinas dapat login menggunakan **email biasa** tanpa perlu memiliki akun GitHub:
1. Daftarkan proyek di [keystatic.cloud](https://keystatic.cloud) dan hubungkan repositori GitHub `andywijaya15/sukamara-tourism-web`.
2. Di dashboard Keystatic Cloud, undang email staf/admin yang bertugas mengelola konten.
3. Tambahkan environment variable di Cloudflare Dashboard (*Settings > Variables and Secrets*):
   - `PUBLIC_KEYSTATIC_PROJECT`: `sukamara/sukamara-tourism-web`
4. Setiap perubahan yang disimpan staf di `/keystatic` akan otomatis dibuatkan commit ke GitHub dan men-trigger build/deploy Cloudflare secara otomatis.

---

## 💻 Panduan Instalasi & Menjalankan

### Prasyarat
- [Node.js](https://nodejs.org/) versi 18.17.1 atau lebih tinggi
- [pnpm](https://pnpm.io/) (direkomendasikan) atau `npm`

### 1. Klon Repositori
```bash
git clone https://github.com/andywijaya15/sukamara-tourism-web.git
cd sukamara-tourism-web
```

### 2. Instal Dependensi
```bash
pnpm install
```

### 3. Konfigurasi Environment
Salin template berkas `.env.example` ke `.env`:
```bash
cp .env.example .env
```

### 4. Jalankan Server Pengembangan
```bash
pnpm dev
```
Buka browser dan akses `http://localhost:4321`.

### 5. Build untuk Produksi
```bash
pnpm build
```

### 6. Preview Hasil Build
```bash
pnpm preview
```

---

## 📄 Lisensi & Hak Cipta

© 2026 Pemerintah Kabupaten Sukamara & Dinas Kepemudaan, Olahraga dan Pariwisata (Disporapar) Kabupaten Sukamara, Kalimantan Tengah. Hak cipta dilindungi undang-undang.
