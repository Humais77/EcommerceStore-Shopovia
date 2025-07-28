/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-bounce': {
          '0%': { transform: 'translateX(100%)' },
          '60%': { transform: 'translateX(-20px)' },
          '80%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(0)' },
        },
        
      },
      animation: {
        'slide-bounce': 'slide-bounce 0.6s ease-out forwards',
      },
      
    },
  },
  plugins: [],
}