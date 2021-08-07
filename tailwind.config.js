module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    safelist: [
      "bg-gray-300",
      "hover:bg-gray-400",
      "text-gray-900",
      "bg-red-400",
      "hover:bg-red-500",
      "bg-gray-600",
      "hover:bg-gray-700",
      "bg-blue-600",
      "hover:bg-blue-700",
      "text-white"
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
