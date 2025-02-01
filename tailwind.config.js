/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xsm: '425px',
        sm: '640px',
        md: '800px',
        xmd: '850px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '4k': '1921px',
      },
      spacing: {
        1464: '1464px',
        '10xl': '30rem',
        '3/5': '60%',
        '1/20': '5%',
        '3/25': '12%',
        '3/20': '15%',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        dimmed: '#C9C9C9',
      },
    },
  },
  plugins: [],
};
