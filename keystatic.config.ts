import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'sukamara/sukamara-tourism-web',
  },
  ui: {
    brand: {
      name: 'Smart Tourism Sukamara CMS',
    },
    navigation: {
      'Tampilan Beranda': ['hero'],
      'Pariwisata': ['destinasi', 'galeri'],
      'Kepemudaan & Olahraga': ['kepemudaan'],
      'Informasi & Publikasi': ['berita', 'event'],
      'Pengaturan Website': ['footer'],
    },
  },
  singletons: {
    hero: singleton({
      label: 'Pengaturan Hero Carousel',
      path: 'src/content/hero/index',
      format: { data: 'json' },
      schema: {
        carousel: fields.array(
          fields.object({
            gambar: fields.image({
              label: 'Foto Slide',
              directory: 'public/images/destinasi',
              publicPath: '/images/destinasi/',
            }),
            judul: fields.text({ label: 'Keterangan Foto (Opsional)' }),
          }),
          {
            label: 'Slide Carousel Banner',
            itemLabel: (props) => props.fields.judul.value || 'Slide Foto',
          }
        ),
        greeting: fields.text({ label: 'Teks Sapaan', defaultValue: 'Selamat Datang di Portal' }),
        title: fields.text({ label: 'Judul Utama', defaultValue: 'DINAS KEPEMUDAAN, OLAHRAGA DAN PARIWISATA' }),
        tagline: fields.text({
          label: 'Tagline',
          defaultValue: 'Strategi Integrasi Pemasaran Destinasi Wisata di Kabupaten Sukamara',
        }),
        slogan: fields.text({ label: 'Slogan Utama (Script)', defaultValue: 'Sukamara Janga' }),
        motto: fields.text({
          label: 'Sub-Slogan (3 Baris)',
          defaultValue: 'PESONA ALAM.\nHARMONI BUDAYA,\nMASA DEPAN BERSAMA',
          multiline: true,
        }),
      },
    }),
    footer: singleton({
      label: 'Pengaturan Footer & Kontak',
      path: 'src/content/footer/index',
      format: { data: 'json' },
      schema: {
        alamat: fields.text({
          label: 'Alamat Lengkap',
          defaultValue: 'Jl. Tjilik Riwut No. 01 Sukamara\nKabupaten Sukamara, Kalimantan Tengah 74772',
          multiline: true,
        }),
        email: fields.text({ label: 'Alamat Email', defaultValue: 'info@sukamarakab.go.id' }),
        facebookUrl: fields.text({ label: 'Link Facebook', defaultValue: 'https://facebook.com' }),
        instagramUrl: fields.text({ label: 'Link Instagram', defaultValue: 'https://instagram.com' }),
        youtubeUrl: fields.text({ label: 'Link YouTube', defaultValue: 'https://youtube.com' }),
        tiktokUrl: fields.text({ label: 'Link TikTok', defaultValue: 'https://tiktok.com' }),
        hashtag: fields.text({ label: 'Hashtag / Slogan', defaultValue: '#Sukamara_Janga' }),
        copyright: fields.text({
          label: 'Teks Hak Cipta',
          defaultValue: '© 2026 Pemerintah Kabupaten Sukamara. All rights reserved.',
        }),
      },
    }),
  },
  collections: {
    destinasi: collection({
      label: 'Destinasi Wisata',
      slugField: 'nama',
      path: 'src/content/destinasi/*',
      format: { data: 'json' },
      schema: {
        nama: fields.slug({ name: { label: 'Nama Destinasi' } }),
        kategori: fields.select({
          label: 'Kategori',
          options: [
            { label: 'Wisata Bahari', value: 'Wisata Bahari' },
            { label: 'Wisata Alam', value: 'Wisata Alam' },
            { label: 'Wisata Budaya', value: 'Wisata Budaya' },
            { label: 'Wisata Religi', value: 'Wisata Religi' },
          ],
          defaultValue: 'Wisata Bahari',
        }),
        kecamatan: fields.text({ label: 'Kecamatan', defaultValue: 'Kec. Sukamara' }),
        alamat: fields.text({ label: 'Alamat Lengkap' }),
        deskripsi: fields.text({ label: 'Deskripsi Singkat', multiline: true }),
        gambar: fields.image({
          label: 'Foto Destinasi',
          directory: 'public/images/destinasi',
          publicPath: '/images/destinasi/',
        }),
        tiket: fields.text({ label: 'Tarif / Tiket Masuk', defaultValue: 'Rp10.000 / orang' }),
        latitude: fields.text({ label: 'Koordinat Latitude (mis. -2.9772)' }),
        longitude: fields.text({ label: 'Koordinat Longitude (mis. 111.1627)' }),
        unggulan: fields.checkbox({ label: 'Tampilkan di Beranda (Unggulan)', defaultValue: true }),
      },
    }),

    berita: collection({
      label: 'Berita & Informasi',
      slugField: 'judul',
      path: 'src/content/berita/*',
      format: { data: 'json' },
      schema: {
        judul: fields.slug({ name: { label: 'Judul Berita' } }),
        kategori: fields.select({
          label: 'Kategori Berita',
          options: [
            { label: 'BERITA WISATA', value: 'BERITA WISATA' },
            { label: 'INFORMASI', value: 'INFORMASI' },
            { label: 'KEGIATAN', value: 'KEGIATAN' },
          ],
          defaultValue: 'BERITA WISATA',
        }),
        tanggal: fields.date({ label: 'Tanggal Terbit' }),
        ringkasan: fields.text({ label: 'Ringkasan Berita', multiline: true }),
        gambar: fields.image({
          label: 'Gambar Utama',
          directory: 'public/images/destinasi',
          publicPath: '/images/destinasi/',
        }),
      },
    }),

    event: collection({
      label: 'Kalender Event',
      slugField: 'judul',
      path: 'src/content/event/*',
      format: { data: 'json' },
      schema: {
        judul: fields.slug({ name: { label: 'Judul Event' } }),
        kategori: fields.select({
          label: 'Kategori Event',
          options: [
            { label: 'EVENT WISATA', value: 'EVENT WISATA' },
            { label: 'EVENT BUDAYA', value: 'EVENT BUDAYA' },
            { label: 'EVENT OLAHRAGA', value: 'EVENT OLAHRAGA' },
            { label: 'EVENT PEMUDA', value: 'EVENT PEMUDA' },
          ],
          defaultValue: 'EVENT WISATA',
        }),
        tanggal: fields.text({ label: 'Tanggal (Angka)', defaultValue: '20' }),
        bulanTahun: fields.text({ label: 'Bulan & Tahun (mis. OKT 2026)', defaultValue: 'OKT 2026' }),
        lokasi: fields.text({ label: 'Lokasi Event', defaultValue: 'Sukamara' }),
      },
    }),

    galeri: collection({
      label: 'Galeri Foto & Video',
      slugField: 'judul',
      path: 'src/content/galeri/*',
      format: { data: 'json' },
      schema: {
        judul: fields.slug({ name: { label: 'Judul Media' } }),
        gambar: fields.image({
          label: 'Berkas Gambar',
          directory: 'public/images/destinasi',
          publicPath: '/images/destinasi/',
        }),
        isVideo: fields.checkbox({ label: 'Video (Susur Sungai / Dokumentasi)', defaultValue: false }),
      },
    }),

    kepemudaan: collection({
      label: 'Program Kepemudaan & Olahraga',
      slugField: 'judul',
      path: 'src/content/kepemudaan/*',
      format: { data: 'json' },
      schema: {
        judul: fields.slug({ name: { label: 'Nama Program / Layanan' } }),
        urutan: fields.integer({ label: 'Urutan Tampil', defaultValue: 1 }),
        deskripsi: fields.text({
          label: 'Deskripsi Singkat (Kartu)',
          multiline: true,
        }),
        deskripsiLengkap: fields.text({
          label: 'Deskripsi Lengkap (Popup Detail)',
          multiline: true,
        }),
        poinLayanan: fields.array(
          fields.text({ label: 'Poin Fokus Layanan' }),
          {
            label: 'Fokus Layanan & Program',
            itemLabel: (props) => props.value || 'Poin Layanan',
          }
        ),
        gambar: fields.image({
          label: 'Foto Program',
          directory: 'public/images/destinasi',
          publicPath: '/images/destinasi/',
        }),
        badgeType: fields.select({
          label: 'Ikon Badge',
          options: [
            { label: 'Organisasi / Komunitas (Users)', value: 'users' },
            { label: 'Olahraga / Prestasi (Trophy)', value: 'trophy' },
            { label: 'Kegiatan / Jadwal (Calendar)', value: 'calendar' },
            { label: 'Inspirasi / Bintang (Star)', value: 'star' },
          ],
          defaultValue: 'users',
        }),
        badgeBg: fields.select({
          label: 'Warna Badge',
          options: [
            { label: 'Biru (#1E5FD8)', value: 'bg-[#1E5FD8]' },
            { label: 'Oranye/Coklat (#B45309)', value: 'bg-[#B45309]' },
            { label: 'Magenta (#B81267)', value: 'bg-[#B81267]' },
            { label: 'Hijau (#2E9E4F)', value: 'bg-[#2E9E4F]' },
          ],
          defaultValue: 'bg-[#1E5FD8]',
        }),
      },
    }),
  },
});
