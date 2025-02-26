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
					},
					{
						key: 'Content-Security-Policy',
						value: `
        default-src 'self';
        script-src 'self' https://apis.google.com;
        style-src 'self' https://fonts.googleapis.com;
        img-src 'self' data: https://yourcdn.com;
        font-src 'self' https://fonts.gstatic.com;
        connect-src 'self' https://systen-storage.ru;
        object-src 'none';
        frame-ancestors 'none';
        base-uri 'self';
        form-action 'self';
    `.replace(/\s{2,}/g, ' ')
					},
					{
						key: 'Strict-Transport-Security',
						value: 'max-age=31536000; includeSubDomains; preload'
					},
					{
						key: 'Permissions-Policy',
						value: 'geolocation=(), microphone=(), camera=(), payment=()'
					},
					{
						key: 'X-Frame-Options',
						value: 'SAMEORIGIN'
					}
				]
			}
		]
	}
}

export default nextConfig
