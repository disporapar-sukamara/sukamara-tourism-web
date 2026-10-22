import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const destinasi = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/destinasi' }),
  schema: z.object({
    nama: z.string(),
    kategori: z.enum(['Wisata Bahari', 'Wisata Alam', 'Wisata Budaya', 'Wisata Religi']),
    kecamatan: z.string(),
    alamat: z.string().optional(),
    deskripsi: z.string(),
    gambar: z.string(),
    tiket: z.string().optional(),
    latitude: z.union([z.number(), z.string()]).optional(),
    longitude: z.union([z.number(), z.string()]).optional(),
    unggulan: z.boolean().default(true),
  }),
});

const berita = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/berita' }),
  schema: z.object({
    judul: z.string(),
    kategori: z.enum(['BERITA WISATA', 'INFORMASI', 'KEGIATAN']),
    tanggal: z.string(),
    ringkasan: z.string(),
    gambar: z.string(),
  }),
});

const event = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/event' }),
  schema: z.object({
    judul: z.string(),
    kategori: z.enum(['EVENT WISATA', 'EVENT BUDAYA', 'EVENT OLAHRAGA', 'EVENT PEMUDA']),
    tanggal: z.string(),
    bulanTahun: z.string(),
    lokasi: z.string(),
  }),
});

const galeri = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/galeri' }),
  schema: z.object({
    judul: z.string(),
    gambar: z.string(),
    isVideo: z.boolean().default(false),
  }),
});

export const collections = {
  destinasi,
  berita,
  event,
  galeri,
};
