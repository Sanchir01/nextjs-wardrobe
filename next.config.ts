import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	compress: true,
	i18n: {
		locales: ['ru'],
		defaultLocale: 'ru'
	},

	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff'
					},
					{
						key: 'Referrer-Policy',
						value: 'strict-origin-when-cross-origin'
					}
				]
			}
		]
	}
}

export default nextConfig
