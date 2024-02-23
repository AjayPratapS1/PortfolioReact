/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vietnam: ["Be Vietnam Pro", "sans-serif"],
      },
      colors: {
        orange: "#E84949",
        faded: "#E7E7E7",
        hero: "#343D68",
        role: "#4E45D5",
      },
      keyframes: {
        scaleImage: {
          "0%": {
            filter: "grayscale(0)",
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.1)",
            filter: "grayscale(1)",
            boxShadow: "3px 3px 10px black",
          },
          "100%": {
            transform: "scale(1)",
            filter: "grayscale(0)",
          },
        },
        shakeEffect: {
          "50%": {
            left: "5%",
            bottom: "10%",
          },
        },
        shakeEffectPlus: {
          "50%": {
            top: "3%",
            left: "48%",
          },
        },
        zigzags: {
          "50%": {
            left: "5%",
            top: "2%",
          },
        },
        dotsAnimation: {
          "0%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-15px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
        cubeRotate:{
          "0%": {
            transform: "rotateY(0deg) translateY(0px)",
          },
          "50%": {
            transform: "rotateY(180deg) translateY(-12px)",
          },
          "100%": {
            transform: " rotateY(360deg) translateY(0px)",
          },
        },
        blobAnimate:{
          "50%":{
            top:"54%",
            left:"46%"
          }
        }
      },
    },
  },
  plugins: [],
};
