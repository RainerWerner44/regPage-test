import svgr from 'vite-plugin-svgr';

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], 
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        eudoxus: ["Eudoxus Sans", "sans-serif"],
      },
      colors: {
        customBlue: '#20496C',
        mainText: '#4F637D',
      },
    },
  },
  plugins: [svgr()],
};