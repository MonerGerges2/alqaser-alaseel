/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ["Cairo", "Helvetica", "sans-serif"],
        urbanist: ["Cairo", "Helvetica", "sans-serif"],
        laxr: ["Cairo", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
