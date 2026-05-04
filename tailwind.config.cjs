module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx,html}'
    ],
    theme: {
        extend: {
            colors: {
                primary: '#d60f0f',
                accent: '#D4AF37',
                dark: '#0b0b0b',
                'muted-gray': '#4b4b4b',
                ink: '#242428',
                'soft-gray': '#f2f3f5',
                'line-soft': '#e7e7ea'
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['Inter', 'sans-serif']
            }
        }
    },
    plugins: []
}
