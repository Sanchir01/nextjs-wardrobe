import type { Metadata } from 'next'
import './globals.css'
import Header from '~/widgets/header'
import Footer from '~/widgets/footer'

export const metadata: Metadata = {
	title: 'Системы хранения',
	description:
		'Купите качественные системы хранения и двери-купе по выгодным ценам. Стильный дизайн и надежность!',
	keywords:
		'titangs, системы хранения, Системы хранения, двери купе, двери-купе, двери, купе, хранения, двери-купе купить, wardrobe',
	robots: 'index, follow'
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
