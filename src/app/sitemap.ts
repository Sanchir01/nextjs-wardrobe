import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://system-storage.ru',
			lastModified: '2025-02-26',
			changeFrequency: 'yearly',
			priority: 1,
			images: ['https//system-storage.ru/public/img/heroBg.png']
		}
	]
}
