import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F59E0B',
        secondary: '#FDE68A',
        background: '#FFFBEB',
        text: '#1F2937',
        accent: '#FB923C',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0,0,0,0.06)',
      },
      borderRadius: {
        xl: '1rem',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'soft-gradient': 'linear-gradient(180deg, #FFFBEB 0%, #FDE68A 50%, #FFFFFF 100%)',
      },
    },
  },
  plugins: [],
}

export default config
