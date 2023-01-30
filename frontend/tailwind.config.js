/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: {
          one: "#F5D23F",
          two: "#D9B520",
        },
        blue: {
          one: "#47CACF",
          two: "#079FA5",
          three: "#1DA1F2",
        },
        pink: {
          one: "#FD93B8",
          two: "#F8749F",
        },
        green: {
          one: "#66E47A",
          two: "#44D660",
          three: "#7BE5A8",
        },
        violet: {
          one: "#8D77F0",
          two: "#7265E3",
          three: "#504BAA",
          four: "#6C5DD3",
        },
        navBar: {
          navBarhover: "#6C5DD3",
          navBarConnexion: "#rgba(0, 184, 171, 0.6)",
          navBarConnexionhover: "#rgba(0, 184, 171, 0.6)",
        },
        btn: {
          notification: "#FF754C",
          day: "#FFEBF6",
          gray: "#1B1D21",
          blue: "#4D7CFE",
          violet: "#7265E3",
          check: "#12B2B3",
          connexion: "#FF888C",
        },
        background: {
          dark: "#242731",
          darker: "#1F2128",
          light: "#FFFFFF",
          lighty: "#F6F4F4",
          connexion: "#00B8AB",
        },
        font: {
          violet: "#6C5DD3",
          green: "#91D148",
          green2: "#66E47A",
          yellow: "#D9B520",
          gray: "#808191",
          dark1: "#11142D",
          dark2: "#0B0B0B",
          dark3: "#252631",
          red: "#ff6962",
        },
        input: {
          dark: "#E4E4E4",
          connexion: "rgba(0, 0, 0, 0.1)",
          range1: "#979797",
          range2: "#5DD3E2",
          smiley: "#8C80F8",
          progress: "#E1DDF5",
          border: "#E8ECEF",
          placeholder: "#98A9BC",
        },
      },
      fontFamily: {
        tittle: "Poppins",
        inter: "Inter",
        rubik: "Rubik",
        montserrat: "Montserrat",
      },
      animation: {
        bounce1: "bounce 1s linear infinite",
        bounce2: "bounce 2s linear infinite",
        bounce3: "bounce 3s linear infinite",
      },
      animationDelay: {
        150: "150ms",
        200: "200ms",
        250: "250ms",
        300: "300ms",
        350: "350ms",
        400: "400ms",
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require("./src/ChatBox/animationDelay")],
};
