import colors from "tailwindcss/colors";

import { Config } from "tailwindcss";

const TailwindConfig: Config = {
  content: [],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: colors.yellow,
        secondary: colors.emerald,
        container: colors.slate,
      },
    },
  },
};

export = TailwindConfig;
