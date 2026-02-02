/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: {
                    primary: '#0f172a',
                    secondary: '#1e293b',
                },
                text: {
                    primary: '#f8fafc',
                    secondary: '#94a3b8',
                },
                accent: {
                    primary: '#8b5cf6', // Violet 500
                    secondary: '#6366f1', // Indigo 500
                }
            },
            fontFamily: {
                heading: ['Outfit', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'glow': '0 0 15px rgba(139, 92, 246, 0.5)',
            }
        },
    },
    plugins: [],
}
