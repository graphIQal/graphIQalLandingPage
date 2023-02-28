/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
	theme: {
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},

		extend: {
			dropShadow: {
				xl: '0 15px 15px rgba(0, 0, 0, 0.35)',
			},
			colors: {
				base_black: '#424245',
				base_white: 'rgba(255,255,255,0.9)',
				selected_white: '#F5F6F7',
				selected_blue: '#B4DBF1',
				lining: '#242425',
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
			fontSize: {
				body: '1.25rem',
			},
			padding: {
				container: '30px',
			},
			animation: {
				'card-enter':
					'3s ease-in 1s infinite reverse both running slidein',
			},
			keyframes: {
				moveIn: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
				},
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
