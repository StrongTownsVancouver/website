/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        fontFamily: {
            synthese: ['Synthese Web', 'sans-serif'],
            atkinson: ['Atkinson', 'sans-serif'],
            mixta: ['MixtaSharp', 'sans-serif'],
        },
        extend: {
            colors: {
                'st-black': '#0c2340',
                'st-yellow': '#ffb549',
                'st-lightblue': '#a7c6ed',
                'st-lightblue-accessible': '#5790db',
                'st-gray': '#60739F',
                'st-gray-dark': '#222939'
            }
        },
    },
    plugins: [],
}
