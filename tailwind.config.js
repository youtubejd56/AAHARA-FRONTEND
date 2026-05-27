/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#0b0f19', // Vibrant deep navy-black
          900: '#111625', // Sleek dark navy-blue
          800: '#1b2234', // Deep steel-blue/navy
          700: '#232f4c',
          600: '#35456b',
        },
        primary: {
          400: '#818cf8', // Soft indigo
          500: '#6366f1', // Indigo
          600: '#4f46e5', // Rich indigo
          700: '#3730a3',
        },
        secondary: {
          400: '#f472b6', // Soft pink
          500: '#ec4899', // Hot pink / magenta
          600: '#db2777', // Rich pink
        },
        accent: {
          400: '#c084fc', // Soft purple
          500: '#a855f7', // Purple
          600: '#9333ea',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Outfit', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 3s',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(212, 175, 55, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
