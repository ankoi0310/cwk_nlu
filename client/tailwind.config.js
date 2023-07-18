const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  important: true,
  darkMode: ['class'],
  experimental: {
    darkModeVariant: true,
  },
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './node_modules/tw-elements-react/dist/@types/**/*.{js,jsx,ts,tsx}',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      primary: ['Poppins', 'sans-serif'],
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {},
      backgroundColor: {
        primary: '#00B96B',
      },
    },
  },
  plugins: [require('tw-elements-react/dist/plugin.cjs')],
})
