import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '~/widgets/header'
import Footer from '~/widgets/footer'

export const metadata: Metadata = {
	title: 'Системы хранения',
	verification: {
		yandex: '6c676881d5a0ee82'
	},
	description:
		'Купите качественные системы хранения и двери-купе по выгодным ценам. Стильный дизайн и надежность!',
	keywords:
		'titangs, системы хранения, Системы хранения, двери купе, двери-купе, двери, купе, хранения, двери-купе купить, wardrobe',
	robots: 'index, follow',
	icons: { icon: '/img/icon.ico' },
	openGraph: {
		title: 'Системы хранения',
		description:
			'Купите качественные системы хранения и двери-купе по выгодным ценам.',
		url: 'https://system-storage.ru',
		siteName: 'Системы хранения',
		images: [
			{
				url: '/img/bghero.png',
				width: 1200,
				height: 630,
				alt: 'Системы хранения - двери-купе'
			}
		],
		type: 'website',
		ttl: 20,
		locale: 'ru'
	},
	metadataBase: new URL('https://system-storage.ru'),
	formatDetection: {
		email: true,
		address: true,
		telephone: true
	},
	authors: {
		name: 'Sanchir01',
		url: 'https://github.com/Sanchir01'
	}
}
export const viewport: Viewport = {
	themeColor: '#f9f9f9'
}
export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className=''>
				<Header />
				<main>
					<div className='wrapper'>{children}</div>
				</main>
				<Footer />
			</body>
		</html>
	)
}
