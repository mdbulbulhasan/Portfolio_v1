/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-background': "url('@/assets/Images/background.jpg')", // Adjust the path to your image
      },
    },
  },
  plugins: [],
}

