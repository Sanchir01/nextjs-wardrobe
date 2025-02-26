import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			animation: {
				ticker: 'ticker 10s linear infinite'
			},
			keyframes: {
				ticker: {
					from: { transform: 'translateX(100%)' },
					to: { transform: 'translateX(-100%)' }
				}
			},
			colors: {
				'custom-black': '#101010',
				'custom-gray': '#d2d2d2',
				'custom-white': '#f9f9f9',
				background: 'var(--background)',
				foreground: 'var(--foreground)'
			},
			fontFamily: {
				gilroy: ['Gilroy', 'sans-serif']
			},
			fontSize: {
				h1: '',
				h2: 'clamp(1.125rem,0.765rem+1.373vw,2rem)'
			}
		}
	},
	plugins: []
} satisfies Config
