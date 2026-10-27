export interface Destination {
  id: string;
  slug: string;
  nama: string;
  kategori: 'Wisata Bahari' | 'Wisata Alam' | 'Wisata Budaya' | 'Wisata Religi';
  kategoriColor: string;
  kecamatan: string;
  deskripsi: string;
  gambar: string;
  lokasi: string;
  tiket?: string;
  unggulan?: boolean;
}

export interface NewsItem {
  id: string;
  judul: string;
  kategori: 'BERITA WISATA' | 'INFORMASI' | 'KEGIATAN';
  kategoriColor: string;
  tanggal: string;
  ringkasan: string;
  gambar: string;
  slug: string;
}

export interface EventItem {
  id: string;
  judul: string;
  tanggal: string;
  bulanTahun: string;
  kategori: string;
  kategoriColor: 'pink' | 'blue' | 'green' | 'orange';
  lokasi: string;
  slug: string;
}

export interface YouthSportsItem {
  id: string;
  judul: string;
  deskripsi: string;
  gambar: string;
  badgeType: 'users' | 'trophy' | 'calendar' | 'star';
  badgeBg: string;
  badgeColor: string;
}

export interface GalleryItem {
  id: string;
  judul: string;
  gambar: string;
  isVideo?: boolean;
}

export const featuredDestinations: Destination[] = [
  {
    id: 'pantai-citra',
    slug: 'pantai-citra',
    nama: 'Pantai Citra',
    kategori: 'Wisata Bahari',
    kategoriColor: 'bg-[#1E5FD8] text-white',
    kecamatan: 'Kec. Sukamara',
    lokasi: 'Kec. Sukamara',
    deskripsi: 'Hamparan pasir putih dan panorama senja yang memukau.',
    gambar: '/images/destinasi/pantai-citra.webp',
    tiket: 'Rp5.000 / orang',
    unggulan: true
  },
  {
    id: 'pantai-anugerah',
    slug: 'pantai-anugerah',
    nama: 'Pantai Anugerah',
    kategori: 'Wisata Bahari',
    kategoriColor: 'bg-[#1E5FD8] text-white',
    kecamatan: 'Kec. Sukamara',
    lokasi: 'Kec. Sukamara',
    deskripsi: 'Keindahan pantai dengan suasana tenang dan alami.',
    gambar: '/images/destinasi/pantai-anugerah.webp',
    tiket: 'Rp10.000 / orang',
    unggulan: true
  },
  {
    id: 'ekowisata-mangrove',
    slug: 'ekowisata-mangrove',
    nama: 'Ekowisata Mangrove',
    kategori: 'Wisata Alam',
    kategoriColor: 'bg-[#2E9E4F] text-white',
    kecamatan: 'Kec. Sukamara',
    lokasi: 'Kec. Sukamara',
    deskripsi: 'Hutan mangrove dengan ekosistem alami yang mempesona.',
    gambar: '/images/destinasi/ekowisata-mangrove.webp',
    tiket: 'Rp5.000 / orang',
    unggulan: true
  },
  {
    id: 'taman-kota-sukamara',
    slug: 'taman-kota-sukamara',
    nama: 'Taman Kota Sukamara',
    kategori: 'Wisata Budaya',
    kategoriColor: 'bg-[#D6197A] text-white',
    kecamatan: 'Kec. Sukamara',
    lokasi: 'Kec. Sukamara',
    deskripsi: 'Warisan budaya dan kearifan lokal masyarakat Sukamara.',
    gambar: '/images/destinasi/makam-datuk-nakhoda.webp',
    tiket: 'Gratis',
    unggulan: true
  }
];

export const latestNews: NewsItem[] = [
  {
    id: '1',
    judul: 'Pesona Pantai Citra Sukamara, Destinasi Favorit untuk Menikmati Senja',
    kategori: 'BERITA WISATA',
    kategoriColor: 'bg-[#E6F0FF] text-[#1E5FD8]',
    tanggal: '15 Okt 2026',
    ringkasan: 'Pantai Citra menawarkan panorama senja yang memukau dengan suasana tenang dan alami.',
    gambar: '/images/destinasi/pantai-citra.webp',
    slug: 'pesona-pantai-citra-sukamara'
  },
  {
    id: '2',
    judul: 'Pengembangan Ekowisata Mangrove di Sukamara Terus Berlanjut',
    kategori: 'INFORMASI',
    kategoriColor: 'bg-[#E0F7F4] text-[#0F766E]',
    tanggal: '12 Okt 2026',
    ringkasan: 'Pemerintah Kabupaten Sukamara terus mendorong pengembangan ekowisata mangrove sebagai destinasi unggulan.',
    gambar: '/images/destinasi/ekowisata-mangrove.webp',
    slug: 'pengembangan-ekowisata-mangrove'
  },
  {
    id: '3',
    judul: 'Disporapar Sukamara Dorong Kolaborasi Pemuda dalam Promosi Wisata',
    kategori: 'KEGIATAN',
    kategoriColor: 'bg-[#FDE8F1] text-[#B81267]',
    tanggal: '10 Okt 2026',
    ringkasan: 'Generasi muda berperan penting dalam mempromosikan potensi wisata Sukamara melalui kreativitas dan inovasi digital.',
    gambar: '/images/destinasi/bukit-jalungga.webp',
    slug: 'disporapar-kolaborasi-pemuda'
  }
];

export const upcomingEvents: EventItem[] = [
  {
    id: '1',
    judul: 'Festival Bahari Sukamara 2026',
    tanggal: '20',
    bulanTahun: 'OKT 2026',
    kategori: 'EVENT WISATA',
    kategoriColor: 'pink',
    lokasi: 'Pantai Citra, Sukamara',
    slug: 'festival-bahari-sukamara-2026'
  },
  {
    id: '2',
    judul: 'Gelar Seni dan Budaya Sukamara',
    tanggal: '28',
    bulanTahun: 'OKT 2026',
    kategori: 'EVENT BUDAYA',
    kategoriColor: 'blue',
    lokasi: 'Taman Kota Sukamara',
    slug: 'gelar-seni-budaya-sukamara'
  },
  {
    id: '3',
    judul: 'Sukamara Fun Run 2026',
    tanggal: '12',
    bulanTahun: 'NOV 2026',
    kategori: 'EVENT OLAHRAGA',
    kategoriColor: 'green',
    lokasi: 'Lapangan Mini Sukamara',
    slug: 'sukamara-fun-run-2026'
  },
  {
    id: '4',
    judul: 'Pelatihan Digital Kreatif untuk Pemuda',
    tanggal: '18',
    bulanTahun: 'NOV 2026',
    kategori: 'EVENT PEMUDA',
    kategoriColor: 'orange',
    lokasi: 'Aula Disporapar Sukamara',
    slug: 'pelatihan-digital-kreatif-pemuda'
  }
];

export const youthAndSportsCards: YouthSportsItem[] = [
  {
    id: '1',
    judul: 'Organisasi Kepemudaan',
    deskripsi: 'Informasi organisasi, komunitas, dan program kepemudaan.',
    gambar: '/images/destinasi/pantai-anugerah.webp',
    badgeType: 'users',
    badgeBg: 'bg-[#1E5FD8]',
    badgeColor: 'text-white'
  },
  {
    id: '2',
    judul: 'Fasilitas Olahraga',
    deskripsi: 'Temukan fasilitas olahraga yang tersedia di Sukamara.',
    gambar: '/images/destinasi/bundaran-tugu-sukamara.webp',
    badgeType: 'trophy',
    badgeBg: 'bg-[#B45309]',
    badgeColor: 'text-white'
  },
  {
    id: '3',
    judul: 'Pendaftaran Kegiatan',
    deskripsi: 'Daftar dan ikuti berbagai kegiatan pemuda dan olahraga.',
    gambar: '/images/destinasi/bukit-jalungga.webp',
    badgeType: 'calendar',
    badgeBg: 'bg-[#1E5FD8]',
    badgeColor: 'text-white'
  },
  {
    id: '4',
    judul: 'Prestasi dan Inspirasi',
    deskripsi: 'Profil, prestasi, dan cerita inspiratif dari pemuda dan atlet Sukamara.',
    gambar: '/images/destinasi/bundaran-burung-balai-riam.webp',
    badgeType: 'star',
    badgeBg: 'bg-[#B81267]',
    badgeColor: 'text-white'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    judul: 'Pesisir Pantai Sukamara',
    gambar: '/images/destinasi/pantai-anugerah.webp'
  },
  {
    id: '2',
    judul: 'Gazebo Senja Pantai Citra',
    gambar: '/images/destinasi/pantai-citra.webp'
  },
  {
    id: '3',
    judul: 'Perahu Nelayan Tradisional',
    gambar: '/images/destinasi/sungai-jelai.webp'
  },
  {
    id: '4',
    judul: 'Jembatan Kayu Hutan Mangrove',
    gambar: '/images/destinasi/ekowisata-mangrove.webp'
  },
  {
    id: '5',
    judul: 'Cagar Budaya Makam Datuk Nakhoda',
    gambar: '/images/destinasi/makam-datuk-nakhoda.webp'
  },
  {
    id: '6',
    judul: 'Wisata Susur Sungai Jelai',
    gambar: '/images/destinasi/tepian-jelai.webp',
    isVideo: true
  }
];

export const quickAccessItems = [
  {
    title: 'Destinasi Unggulan',
    desc: 'Temukan pesona wisata terbaik di Sukamara',
    icon: 'palmtree',
    iconColor: 'text-[#2E9E4F]',
    href: '#destinasi-unggulan'
  },
  {
    title: 'Peta Wisata Digital',
    desc: 'Jelajahi lokasi wisata dengan peta interaktif',
    icon: 'map-pin',
    iconColor: 'text-[#0E9F8E]',
    href: '#peta-wisata'
  },
  {
    title: 'Kalender Event',
    desc: 'Lihat agenda wisata, budaya, pemuda & olahraga',
    icon: 'calendar',
    iconColor: 'text-[#D6197A]',
    href: '#agenda-mendatang'
  },
  {
    title: 'Kepemudaan',
    desc: 'Informasi organisasi, program dan kegiatan',
    icon: 'users',
    iconColor: 'text-[#1E5FD8]',
    href: '#kepemudaan-olahraga'
  },
  {
    title: 'Olahraga',
    desc: 'Fasilitas, event, dan prestasi olahraga',
    icon: 'trophy',
    iconColor: 'text-[#F59E0B]',
    href: '#kepemudaan-olahraga'
  },
  {
    title: 'Layanan Publik',
    desc: 'Pengaduan, informasi dan layanan online',
    icon: 'headphones',
    iconColor: 'text-[#0E9F8E]',
    href: '#layanan'
  }
];
