import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        header: "var(--height-header)",
      },
      colors: {
        primary: {
          100: "rgba(85, 112, 241)",
          90: "rgba(96, 120, 236)",
          80: "rgba(109, 131, 236)",
          70: "rgba(124, 143, 236)",
          60: "rgba(136, 153, 233)",
          50: "rgba(151, 165, 235)",
          40: "rgba(171, 181, 233)",
          30: "rgba(182, 191, 232)",
          20: "rgba(196, 202, 232)",
          10: "rgba(219, 222, 238)",
        },
        secondary: {
          100: "rgba(255, 204, 145)",
          90: "rgba(255, 210, 158)",
          80: "rgba(255, 218, 174)",
          70: "rgba(255, 223, 186)",
          60: "rgba(255, 229, 200)",
          50: "rgba(255, 234, 209)",
          40: "rgba(255, 240, 222)",
          30: "rgba(255, 242, 226)",
          20: "rgba(254, 245, 234)",
          10: "rgba(254, 249, 242)",
        },
        black: {
          100: "rgba(28, 29, 34)",
          90: "rgba(44, 45, 51)",
          80: "rgba(51, 52, 58)",
          70: "rgba(55, 57, 63)",
          60: "rgba(69, 70, 78)",
          50: "rgba(83, 84, 92)",
          40: "rgba(110, 112, 121)",
          30: "rgba(139, 141, 151)",
          20: "rgba(166, 168, 177)",
          10: "rgba(190, 192, 202)",
        },
        green: "rgba(81, 156, 102)",
        red: "rgba(204, 95, 95)",
        "bg-color": "var(--bg-color)",
        "blur-color": "rgba(0, 0, 0, 0.5)",
        "input-defaut-color": "var(--input-color-defaut)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // require("daisyui")
  ],
  // daisyui: {
  //   themes: ["light"]
  // }
};
export default config;
