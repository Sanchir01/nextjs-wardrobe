import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	optimizeFonts: true,
	swcMinify: true,
	compress: true,
	i18n: {
		locales: ['ru'],
		defaultLocale: 'ru'
	}
}

export default nextConfig
