import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://system-storage.ru',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
			images: ['https//system-storage.ru/public/img/heroBg.png']
		}
	]
}
