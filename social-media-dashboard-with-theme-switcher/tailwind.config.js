/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        bg: {
          body: "hsl(0, 0%, 100%)",
          bodyDark: "hsl(230, 17%, 14%)",
          header: "hsl(225, 100%, 98%)",
          headerDark: "hsl(232, 19%, 15%)",
          card: "hsl(227, 47%, 96%)",
          cardHover: "hsl(227, 47%, 90%)",
          cardHoverDark: "hsl(228, 28%, 30%)",
          cardDark: "hsl(228, 28%, 20%)",
        },
        text: {
          main: "hsl(228, 12%, 44%)",
          mainDark: "hsl(228, 34%, 66%)",
          sec: "hsl(230, 17%, 14%)",
          secDark: "hsl(0, 0%, 100%)",
        },
        primary: {
          limeGreen: "hsl(163, 72%, 41%)",
          brightRed: "hsl(356, 69%, 56%)",
          fb: "hsl(208, 92%, 53%)",
          tw: "hsl(203, 89%, 53%)",
          ig1: "hsl(37, 97%, 70%)",
          ig2: "hsl(329, 70%, 58%)",
          yt: "hsl(348, 97%, 39%)",
        },
        toggleColor: {
          light: "hsl(230, 22%, 74%)",
          dark1: "hsl(210, 78%, 56%)",
          dark2: "hsl(146, 68%, 55%)",
        },
      },
    },
  },
  plugins: [],
};
