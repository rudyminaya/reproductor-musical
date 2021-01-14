module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'red-principal': '#E86060',
                'red-transparency': '#e86060b9',
                'dark-red-secondary': '#662323',
                'soft-gray': '#BDBDBD',
                gris: '#828282',
                'light-red': '#FF7676',
            },
            width: {
                banner: '250px',
            },
            height: {
                banner: '250px',
            },
            fontSize: {
                semixl: '1.375rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
