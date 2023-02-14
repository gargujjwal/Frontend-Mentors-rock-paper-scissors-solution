/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            primary: ["Barlow Semi Condensed", "sans-serif"
            ]
        },
        extend: {
            screens: {
                "sm": "375px"
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "triangle": "url('/src/assets/images/bg-triangle.svg')"
            },
            colors: {
                "dark-text": "hsl(229, 25%, 31%)",
                "score-text": "hsl(229, 64%, 46%)",
                "header-outline": "hsl(217, 16%, 45%)",
                "scissors-1": "#ec9e0e",
                "scissors-2": "#eca922",
                "paper-1": "#4865f4",
                "paper-2": "#5671f5",
                "rock-1": "#dc2e4e",
                "rock-2": "#dd405d",
                "lizard-1": "#834fe3",
                "lizard-2": "#8c5de5",
                "cyan-1": "#40b9ce",
                "cyan-2": "#52bed1",
                "light-shadow": "#00000026",
                "medium-shadow": "#0000004d"
            }
        }
    },
    plugins: [require("prettier-plugin-tailwindcss")]
};
