module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        prose: '850px',
      },
      fontFamily: {
        sans: ['Inter var'],
      },
      colors: {
        'neutral-850': '#202020',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio'), require('tailwind-scrollbar')],
};
