/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#161616",
        "second-color": "#fff",
        "ide-primary": "#3A3A3A",
        "ide-second": "#DDDDDD",
        "process-primary": "#FFD644",
        "process-second": "#FFF1CC",
        "finish-primary": "#2EAC51",
        "finish-second": "#D9FFE3",
      },
      boxShadow: {
        custom: "0 0 35px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [require("daisyui")],
};
