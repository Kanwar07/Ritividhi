module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, #87ceeb, #b0d8f5, #d2e3fa, #edf0fc, #ffffff);",
      },
      animation: {
        rotation: "rotation 20s infinite linear",
        animation: "animation 6s ease infinite",
      },
      keyframes: {
        rotation: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(359deg)" },
        },
        animation: {
          "0%, 100%": { top: "-20px" },
          "20%": { top: "-20px" },
          "25%": { top: "-140px" },
          "45%": { top: "-140px" },
          "50%": { top: "-260px" },
          "70%": { top: "-260px" },
          "75%": { top: "-380px" },
          "95%": { top: "-380px" },
        },
      },
      fontFamily: {
        "rubik-mono": ['"Rubik Mono One"', "monospace"],
        "devanagari-sangam": ["Devanagari Sangam MN"],
        quicksand: ['"Quicksand"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
