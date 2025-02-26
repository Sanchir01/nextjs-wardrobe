import type { Metadata } from 'next'
import './globals.css'

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
			<body className=''>{children}</body>
		</html>
	)
}
