// tailwind.config.js
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5733',  // Define custom colors if needed
        'primary-foreground': '#fff', // Example color
      },
    },
  },
  plugins: [],
};
