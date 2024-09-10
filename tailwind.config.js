/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    // colors:{
    //   'primary': {
    //     500: '#404463',
    //
    //     700: '#2C2F47',
    //
    //   },
    // },

    extend: {
      backgroundImage: {
        'galaxy-image': "url('/galaxy.webp')",
      },
      colors: {
        primary:{
              500: '#404463',

              700: '#2C2F47',

            },
      }
    },
  },
  plugins: [],
}
