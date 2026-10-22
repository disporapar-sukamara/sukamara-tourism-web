/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0B2A5B',
          800: '#103770',
          700: '#17478d',
        },
        brand: {
          blue: '#1E5FD8',
          'blue-light': '#E6F0FF',
          magenta: '#D6197A',
          'magenta-light': '#FDE8F1',
          teal: '#0E9F8E',
          'teal-light': '#E6F8F5',
          green: '#2E9E4F',
          'green-light': '#E9F7ED',
          orange: '#F59E0B',
          'orange-light': '#FEF3C7',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F6FA',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        script: ['"Sacramento"', '"Caveat"', 'cursive'],
        handwriting: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        soft: '0 4px 16px rgba(11, 42, 91, 0.08)',
        'soft-hover': '0 8px 24px rgba(11, 42, 91, 0.14)',
      },
      borderRadius: {
        card: '14px',
        pill: '9999px',
      }
    },
  },
  plugins: [],
};
