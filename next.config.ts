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
              script-src 'self' 'unsafe-inline' https://apis.google.com;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              img-src 'self' data: https://yourcdn.com;
              font-src 'self' https://fonts.gstatic.com;
              connect-src 'self' https://api.yourdomain.com;
              object-src 'none';
              frame-ancestors 'none';
              base-uri 'self';
              form-action 'self';
            `.replace(/\s{2,}/g, ' ')
					}
				]
			}
		]
	}
}

export default nextConfig
