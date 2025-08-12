// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rajdhani: ['"Rajdhani"', 'sans-serif'],
      },
      keyframes: {
        'pulse-signal': {
          '0%': {
            transform: 'scale(1)',
            opacity: '0.6',
            boxShadow: '0 0 0 0 rgba(34,197,94,0.5)',
          },
          '100%': {
            transform: 'scale(1.8)',
            opacity: '0',
            boxShadow: '0 0 0 20px rgba(34,197,94,0)',
          },
        },
        'up-down': {
          '0%': {
            transform: 'translateY(0px)',
            boxShadow: '0 0 0 0 rgba(34,197,94,0.5)',
          },
          '50%': {
            transform: 'translateY(-15px)',
            boxShadow: '0 0 0 10px rgba(34,197,94,0.2)',
          },
          '100%': {
            transform: 'translateY(0px)',
            boxShadow: '0 0 0 0 rgba(34,197,94,0)',
          },
        }
      },
      animation: {
        'pulse-signal': 'pulse-signal 1.2s ease-out infinite',
        'up-down': 'up-down 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
