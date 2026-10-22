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
- **CMS Keystatic Terproteksi:** Dashboard admin di rute `/admin` (redirect ke `/keystatic`) dengan proteksi HTTP Basic Auth.

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
│   ├── styles/               # globals.css
│   └── middleware.ts         # Proteksi HTTP Basic Auth rute admin
├── astro.config.mjs
├── keystatic.config.ts       # Definisi schema koleksi & singleton CMS
└── package.json
```

---

## 🔐 Akses CMS Admin

Akses dashboard konten dapat dilakukan melalui:
- **URL Admin:** `http://localhost:4321/admin` *(otomatis dialihkan ke `/keystatic`)*
- **Proteksi:** HTTP Basic Auth

### Kredensial Default
Buat atau sesuaikan berkas `.env` di direktori utama:
```env
ADMIN_USER=admin
ADMIN_PASSWORD=adminsukamara
```

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
