/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        orange: "#ff9900",
        chocolate: {
          "100": "#cc6600",
          "200": "rgba(204, 102, 0, 0.09)",
        },
        "light-orange": "#ffa41c",
        gainsboro: "#e6e6e6",
        orange1: "rgba(255, 153, 0, 0.25)",
      },
      spacing: {},
      fontFamily: {
        "desktop-h2-120pt": "Teko",
      },
      borderRadius: {
        "980xl": "999px",
        "61xl": "80px",
        xl: "20px",
      },
    },
    fontSize: {
      lg: "18px",
      "141xl": "160px",
      "21xl": "40px",
      "45xl": "64px",
      "5xl": "24px",
      lgi: "19px",
      "101xl": "120px",
      "11xl": "30px",
      "29xl": "48px",
      "25xl": "44px",
      "7xl": "26px",
      "16xl": "35px",
      "3xl": "22px",
      "81xl": "100px",
      "31xl": "50px",
      "161xl": "180px",
      "26xl": "45px",
      "53xl": "72px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
