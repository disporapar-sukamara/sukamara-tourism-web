export interface DepartmentProfileData {
  namaInstansi: string;
  singkatan: string;
  dasarHukum: {
    nomor: string;
    tentang: string;
    tahun: number;
    filePdf: string;
  };
  tugasPokok: string;
  fungsi: string[];
  struktur: {
    kepalaDinas: {
      jabatan: string;
      nama: string;
    };
    fungsional: {
      jabatan: string;
      keterangan: string;
    };
    sekretariat: {
      jabatan: string;
      nama: string;
      subbagian: Array<{
        jabatan: string;
        nama: string;
      }>;
    };
    bidang: Array<{
      jabatan: string;
      nama: string;
      warna: string;
    }>;
    upt: {
      jabatan: string;
      keterangan: string;
    };
  };
}

export const departmentData: DepartmentProfileData = {
  namaInstansi: 'Dinas Kepemudaan, Olahraga dan Pariwisata Kabupaten Sukamara',
  singkatan: 'DISPORAPAR',
  dasarHukum: {
    nomor: 'Peraturan Bupati Sukamara Nomor 55 Tahun 2022',
    tentang: 'Kedudukan, Susunan Organisasi, Tugas dan Fungsi Serta Tata Kerja Dinas Kepemudaan, Olahraga dan Pariwisata Kabupaten Sukamara',
    tahun: 2022,
    filePdf: '/docs/perbup-55-2022-sotk-disporapar.pdf',
  },
  tugasPokok:
    'Dinas Kepemudaan, Olahraga dan Pariwisata mempunyai tugas membantu Bupati dalam melaksanakan Urusan Pemerintahan di bidang Kepemudaan, Olah Raga dan Pariwisata yang menjadi kewenangan Daerah dan Tugas Pembantuan yang diberikan kepada Daerah.',
  fungsi: [
    'Pengoordinasian perencanaan program dan kegiatan di bidang kepemudaan, olahraga dan pariwisata;',
    'Pengoordinasian perumusan dan pelaksanaan kebijakan teknis di bidang kepemudaan, olahraga dan pariwisata;',
    'Pengoordinasian penyelenggaraan program pengembangan kapasitas daya saing kepemudaan;',
    'Pengoordinasian penyelenggaraan program pengembangan kapasitas daya saing keolahragaan;',
    'Pengoordinasian penyelenggaraan program pengembangan kapasitas kepramukaan;',
    'Pengoordinasian penyelenggaraan program peningkatan daya tarik destinasi pariwisata;',
    'Pengoordinasian penyelenggaraan program pemasaran pariwisata;',
    'Pengoordinasian penyelenggaraan program pengembangan ekonomi kreatif melalui pemanfaatan dan perlindungan hak kekayaan intelektual;',
    'Pengoordinasian penyelenggaraan program pengembangan sumber daya pariwisata dan ekonomi kreatif;',
    'Pengoordinasian penyelenggaraan kesekretariatan dinas;',
    'Pengoordinasian pengelolaan barang milik dan atau kekayaan negara/daerah yang menjadi tanggungjawab dinas;',
    'Pembinaan dan pengoordinasian penyelenggaraan tugas dan fungsi unit pelaksana teknis di lingkungan dinas;',
    'Pembinaan dan pengoordinasian penyelenggaraan tugas dan fungsi kelompok jabatan fungsional di lingkungan dinas;',
    'Pengoordinasian pelaksanaan reformasi birokrasi, sistem pengendalian internal pemerintah, dan zona integritas dinas;',
    'Pengoordinasian pelaksanaan pemantauan, pengendalian, evaluasi dan penyusunan laporan pelaksanaan tugas dinas; dan',
    'Pelaksanaan fungsi lain yang diberikan oleh bupati sesuai dengan bidang tugas dinas.',
  ],
  struktur: {
    kepalaDinas: {
      jabatan: 'KEPALA DINAS',
      nama: 'MANSUR ADABI, S.Pd.',
    },
    fungsional: {
      jabatan: 'KELOMPOK JABATAN FUNGSIONAL',
      keterangan: 'Kelompok Pejabat Fungsional / Ahli Pratama & Muda',
    },
    sekretariat: {
      jabatan: 'SEKRETARIAT DINAS',
      nama: 'SUPARMAN, SE., MM',
      subbagian: [
        {
          jabatan: 'SUBBAGIAN PERENCANAAN, KEUANGAN DAN PELAPORAN',
          nama: 'KADARUDIN, S.I.P',
        },
        {
          jabatan: 'SUBBAGIAN UMUM DAN KEPEGAWAIAN',
          nama: 'DIAN IKA SULISTYO YULIYANTIE, S.M',
        },
      ],
    },
    bidang: [
      {
        jabatan: 'BIDANG KEPEMUDAAN DAN OLAH RAGA',
        nama: 'HERMANSYAH, S.IP',
        warna: 'border-l-4 border-l-[#B81267]',
      },
      {
        jabatan: 'BIDANG PARIWISATA',
        nama: 'ABDUL SYUKUR, SP',
        warna: 'border-l-4 border-l-[#0F766E]',
      },
    ],
    upt: {
      jabatan: 'UPT',
      keterangan: 'Unit Pelaksana Teknis',
    },
  },
};
