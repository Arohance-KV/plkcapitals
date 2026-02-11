export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["'Josefin Sans'"],
      serif: ["'Source Serif 4'"],
      montserrat: ["'Montserrat'"],
    },
    extend: {
      colors: {
        plk: {
          navy: '#0b1b2f',
          red: '#D93025',
          green: '#4CAF50',
          lima: '#A1CD3A',
          white: '#e5e8ec',
          grey: '#acacacff',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
