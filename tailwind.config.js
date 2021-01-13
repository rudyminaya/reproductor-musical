module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'red-principal': '#E86060',
                'dark-red-secondary': '#662323',
                'soft-gray': '#BDBDBD',
                gris: '#828282',
                'light-red': '#FF7676',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
