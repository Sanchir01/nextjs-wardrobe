import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
	return {
		lang: 'ru-RU',
		scope: '/',
		name: 'Системы хранения',
		short_name: 'Wardrobe',
		description:
			'Купите качественные системы хранения и двери-купе в Санкт-Петербурге по выгодным ценам',
		start_url: '/',
		dir: 'auto',
		orientation: 'any',
		display: 'standalone',
		background_color: '#f2f2f2',
		theme_color: '#000000',
		icons: [
			{
				src: 'favicon512x512.png',
				sizes: '512x512',
				type: 'image/png'
			},
			{
				src: 'favicon256x256.png',
				sizes: '256x256',
				type: 'image/ico'
			},
			{
				src: 'favicon192x192.png',
				sizes: '192x192',
				type: 'image/png'
			},
			{
				src: 'favicon.ico',
				sizes: '128x128',
				type: 'image/ico'
			}
		]
	}
}
