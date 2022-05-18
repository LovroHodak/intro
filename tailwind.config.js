module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  // use EXTEND to only add and not overwrite styles
  theme: {
    extend: {fontSize: {tinny: '0.5rem'}, scale: {'200': '2'}},
  },
  plugins: [],
}
