import { Config } from "tailwindcss";

const TailwindConfig: Config = {
  content: ["./src/*/**.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#eab208",
      },
    },
  },
};

export default TailwindConfig;
