export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        plk: {
          navy: '#0B1B2F', // Updated Navy
          red: '#D93025',
          green: '#4CAF50',
          lima: '#A1CD3A', // New Tertiary
          white: '#FFFFFF',
          grey: '#A0A0A0',
        }
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
