/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        gray: "#A4ADBF",
        blue: "#44AFF2",
        brightGreen: "#8DF2E0",
        green: "#55D9B3",
        black: "#0D0D0D",
        white: "#F2F2F2"
      },
      keyframes: {
        slideRight: {
          "from": {
            transform: "translateX(-100%)",
            opacity: "0%"
          },
          "50%": {
            opacity: "0%"
          },
          "to": {
            transform: "translateX(0%)",
            opacity: "100%"
          }
        },
        slideLeft: {
          "from": {
            transform: "translateX(100%)",
            opacity: "0%"
          },
          "50%": {
            opacity: "0%"
          },
          "to": {
            transform: "translateX(0%)",
            opacity: "100%"
          }
        },
      },
      animation: {
        slideRight: "0.5s ease-out 1 slideRight",
        slideLeft: "0.5s ease-out 1 slideLeft",

      }
    },
  },
  plugins: [],
}

/*
colors: {
        "MiddleRedPurple":"#ad5e60",
        "GoldCrayola":"#ebc77e",
        "Black":"#000000",
        "BeauBlue":"#b4cfe5",
        "OceanGreen":"#61c9ac",
        "PyraRed": "#930043",
        "PneumaBlue": "#00488d",
      }
*/