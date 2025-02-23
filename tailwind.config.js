// tailwind.config.js
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'spin-slower': 'spin 15s linear infinite',
      },
      colors: {
        primary: '#FF5733',  // Define custom colors if needed
        'primary-foreground': '#fff', // Example color
      },
    },
  },
  plugins: [],
};
