/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            com: {
                primary: '#029FE4',
                gray: '#777777',
                indigo: '#07477A',
            }
        },
        fontFamily: {
            primary: ['Rubik']
        }
    },
  },
  plugins: [],
}
