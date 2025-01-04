/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend:{backgroundImage: {
      bannerImg: "url('/imgs/bannerImg.jpg')"
    }, },
  plugins: [],
}}