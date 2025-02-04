const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./public/index.php",
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js",
    ],
    darkMode: "class", // or 'class'
    theme: {
        extend: {
            colors: {
                main_b: "#FFFFFF",
                main_n: "#000000",
                cafe_tenue: "#7B6756",
                arena_1: "#F8F8E8", // Cima-opacity-10 // Mapa
                arena_2: "#FFF0E6", // Ofrece
                arena_3: "#F6F5F4", //Botones, control modelos // Solo Figma =>#FFF6F1 //cotizador
                bonanza: "#FD6B21", //#FF6B00 // <= Estos Figma
                cima: "#B8BC2C", //#B8BE14
                magna: "#3AA8DC", //#32A7DE
                ventura: "#D30D5A", //#D50057
                pacifico: "#F25497", //#F45197
                rosa_tenue: "#F7A9CB", // Drive => monumento-bandera
                rosa_tenue2: "#FEEEF5", //Drive => pacifico-opacity-10
            },
            fontFamily: {
                ibmPlex: ["IBM Plex Mono", "sans-serif"],
                archivoCondensed: ["Archivo Condensed", "sans-serif"],
                archivoExpanded: ["Archivo Expanded", "sans-serif"],
            },
            maxWidth: {
                app: "1520px",
                section: "1440px",
                "section-content": "1250px",
                // section: "1320px",
                // "section-content": "1320px",
            },
            backgroundImage: {
                "hero-content-home": "url('/hero/banner_inicial.png')",
            }
        },
    },

    plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
