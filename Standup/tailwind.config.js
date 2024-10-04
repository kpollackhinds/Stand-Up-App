/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserratblack: ["Montserrat-Black", "sans-serif"],
        montserratblackitalic: ["Montserrat-BlackItalic", "sans-serif"],
        montserratbold: ["Montserrat-Bold", "sans-serif"],
        montserratbolditalic: ["Montserrat-BoldItalic", "sans-serif"],
        montserratextrabold: ["Montserrat-ExtraBold", "sans-serif"],
        montserratextrabolditalic: ["Montserrat-ExtraBoldItalic", "sans-serif"],
        montserratextralight: ["Montserrat-ExtraLight", "sans-serif"],
        montserratextralightitalic: [
          "Montserrat-ExtraLightItalic",
          "sans-serif",
        ],
        montserratitalic: ["Montserrat-Italic", "sans-serif"],
        montserratlight: ["Montserrat-Light", "sans-serif"],
        montserratlightitalic: ["Montserrat-LightItalic", "sans-serif"],
        montserratmedium: ["Montserrat-Medium", "sans-serif"],
        montserratmediumitalic: ["Montserrat-MediumItalic", "sans-serif"],
        montserratregular: ["Montserrat-Regular", "sans-serif"],
        montserratsemibold: ["Montserrat-SemiBold", "sans-serif"],
        montserratsemibolditalic: ["Montserrat-SemiBoldItalic", "sans-serif"],
        montserratthin: ["Montserrat-Thin", "sans-serif"],
        montserratthinitalic: ["Montserrat-ThinItalic", "sans-serif"],
      },

      // colors: {
      //   primary: "#79B1F4",
      //   dark: "#131D3C",
      //   neutral: "#DB32EF",
      //   background: "#FFFFFF",
      //   accent: "E6CCB2",
      // },
    },
  },
  plugins: [],
};
