/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2E4A3C',
          50: '#E8EFEB',
          100: '#D1DFD7',
          200: '#A3BFB0',
          300: '#759F88',
          400: '#517F61',
          500: '#2E4A3C',
          600: '#263D32',
          700: '#1E3027',
          800: '#16231D',
          900: '#0E1612',
        },
        cream: {
          DEFAULT: '#FDFBF7',
          50: '#FFFFFF',
          100: '#FDFBF7',
          200: '#F5EFE3',
          300: '#EDE3CF',
          400: '#E5D7BB',
        },
        warm: {
          DEFAULT: '#8B7355',
          50: '#F5F2EF',
          100: '#EBE5DE',
          200: '#D7CBBD',
          300: '#C3B19C',
          400: '#AF977B',
          500: '#8B7355',
          600: '#6F5C44',
          700: '#534533',
          800: '#372E22',
          900: '#1B1711',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 4px 30px rgba(46, 74, 60, 0.08)',
        'soft-lg': '0 10px 50px rgba(46, 74, 60, 0.12)',
        'soft-xl': '0 20px 60px rgba(46, 74, 60, 0.15)',
        'inner-soft': 'inset 0 2px 10px rgba(46, 74, 60, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
