module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ], 
  theme: {  
    fontFamily: {
      primary: "Inter",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1170px",
    },
    colors: {
      fill: "#515151",
      CMD: {
        DEFAULT: "#232323",
        100: "#4D4D4D",
        200: "#000000",
      },
      gray: {
        DEFAULT: "#D9D9D9",
        100: "#B5B5B5",
        200: "#8B8989",
        300: "#676464",
      },
      yellow: "#EDC988",
      pink: {
        DEFAULT: "#FF7D6B",
        100: "#FFE9E4",
        200: "#FEAEA3",
      },
      portfolio: "#464A4B",
      heading: "#1C0A0A",
      paragraph: "#505050",
      stroke: {
        1: "#B0B4C0",
        2: "#CFCFCF",
        3: "#F4F5F7",
      },
      section: "#F5F6F9",
      shape: "#E8EEF0",
      white: "#FFFFFF",
      transparent: "transparent",
    },
    extend: {
      backgroundImage: {
        circle: "url('/src/assets/img/hero/bg.png')",
        cardsBg: "url('/src/assets/img/cards/bg.png')",
        video: "url('/src/assets/img/video/video.png')",
        contact: "url('/src/assets/img/contact/bg.png')",
      },
      boxShadow: {
        primary: "0px 18px 36px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
