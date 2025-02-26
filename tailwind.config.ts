import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				'custom-black': '#101010',
				'custom-gray': '#d2d2d2',
				'custom-white': '#f9f9f9',
				background: 'var(--background)',
				foreground: 'var(--foreground)'
			}
		}
	},
	plugins: []
} satisfies Config
