module.exports = {
    theme: {
        extend: {
            colors: {
                light: "#F7F1F8",
                accent: "#FF0266",

                "dark-900": "#121212",
                "dark-800": "#1E1E1E",
                "dark-700": "#222222",
                "dark-600": "#242424",
                "dark-500": "#272727",
                "dark-400": "#2C2C2C",
                "dark-300": "#2D2D2D",
                "dark-200": "#333333",
                "dark-100": "#343434",
            },
            minHeight: theme => ({
                auto: "auto",
                ...theme("spacing"),
                full: "100%",
                screen: "100vh",
            }),
        },
    },
    variants: {},
    plugins: [],
    corePlugins: {
        container: false,
    },
};
