/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            primary: ["Barlow Semi Condensed", "sans-serif"]
        },
        extend: {
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
                "spock-1": "#40b9ce",
                "spock-2": "#52bed1",
                "light-shadow": "#00000026",
                "medium-shadow": "#0000004d"
            },
            backgroundImage: {
                triangle: "url('/bg/bg-triangle.png')",
                pentagon: "url('/bg/bg-pentagon.png')"
            }
        }
    },
    plugins: [require("prettier-plugin-tailwindcss")]
};
