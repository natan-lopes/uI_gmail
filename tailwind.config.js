/** @type {import('tailwindcss').Config} */
module.exports = {
  // tailwind.config.js
    
    content: ["./app/**/*.{ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
      extend: {},
    },
    plugins: [],
  }

