import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
	return {
		lang: 'ru-RU',
		scope: '/',
		name: 'Гардеробные системы хранения',
		short_name: 'Wardrobe',
		description:
			'Купите качественные системы хранения и двери-купе в Санкт-Петербурге по выгодным ценам',
		start_url: '/',
		dir: 'auto',
		orientation: 'any',
		display: 'standalone',
		background_color: '#f2f2f2',
		theme_color: '#101010',
		icons: [
			{
				src: 'favicon512x512.png',
				sizes: '512x512',
				type: 'image/ico'
			},
			{
				src: 'favicon256x256.png',
				sizes: '256x256',
				type: 'image/ico'
			},
			{
				src: 'favicon.ico',
				sizes: '128x128',
				type: 'image/ico'
			},
			{
				src: 'favicon-16x16.png',
				sizes: '16x16',
				type: 'image/png'
			},
			{
				src: 'favicon-32x32.png',
				sizes: '32x32',
				type: 'image/png'
			}
		]
	}
}
