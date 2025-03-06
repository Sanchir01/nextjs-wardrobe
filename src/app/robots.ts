import type { MetadataRoute } from 'next'

export default function Robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/*'
		},
		host: 'system-storage.ru',
		sitemap: 'http://system-storage.ru/sitemap.xml'
	}
}
