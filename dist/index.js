"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const colors_1 = __importDefault(require("tailwindcss/colors"));
const TailwindConfig = {
    content: [],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: colors_1.default.yellow,
                secondary: colors_1.default.emerald,
                container: colors_1.default.slate,
            },
        },
    },
};
module.exports = TailwindConfig;
