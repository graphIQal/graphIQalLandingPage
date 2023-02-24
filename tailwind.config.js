/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},

		extend: {
			colors: {
				base_black: '#424245',
				base_white: 'rgba(255,255,255,0.9)',
			},
			fontFamily: {
				sans: ['Open Sans'],
				body: ['Open Sans', 'sans-serif'],
				primary: 'Open Sans',
				secondary: 'Open Sans',
				code: [
					'source-code-pro',
					'Menlo',
					'Monaco',
					'Consolas',
					'"Courier New"',
					'monospace',
				],
			},
		},
	},
	plugins: [],
};
