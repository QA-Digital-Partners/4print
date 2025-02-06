/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        '4pblue': '#3149BC',
        '4pred': '#F23434',
        '4pblack': '#121212',
        '4plight-grey' : '#A8A7A7',
        '4pgrey': '#EFEEEE',
      },
      boxShadow: {
        'usual': '0 4px 10px 0px rgba(0, 0, 0, 0.15)',
      },
      borderWidth: {
        '1': '1px'
      },
      container: {
        center: true,  // Esto centra el container horizontalmente
        screens: {
          lg: '1200px',  // Establecer el max-width para pantallas grandes
          xl: '1200px',
          '2xl': '1200px',
        },
      },
    },
  },
  plugins: [],
};
