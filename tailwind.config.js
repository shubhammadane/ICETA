/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f5fa',
          100: '#e1ecf6',
          200: '#c3daf0',
          300: '#96c0e5',
          400: '#63a1d7',
          500: '#3f84c7',
          600: '#2a69ab',
          700: '#23548b',
          800: '#1e3e62',
          900: '#0b192c',
          950: '#060f1c',
        },
        academic: {
          blue: '#0F2744',
          gold: '#D97706',
          cyan: '#0284C7',
          teal: '#0D9488',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'academic': '0 4px 20px -2px rgba(11, 25, 44, 0.08), 0 2px 6px -1px rgba(11, 25, 44, 0.04)',
        'academic-hover': '0 10px 30px -4px rgba(11, 25, 44, 0.12), 0 4px 12px -2px rgba(11, 25, 44, 0.06)',
      }
    },
  },
  plugins: [],
}
