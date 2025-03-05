import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '~/widgets/header'
import Footer from '~/widgets/footer'
import YandexMetrika from '~/providers'
import Script from 'next/script'
import YandexMetrikaSeo from '~/providers/yandexseo'

export const metadata: Metadata = {
	title: 'Системы хранения',
	description:
		'Купите качественные системы хранения и двери-купе в Санкт-Петербурге по выгодным ценам',
	keywords:
		'titangs, системы хранения, Системы хранения, двери купе, двери-купе, двери, купе, хранения, двери-купе купить, wardrobe',
	robots: 'index, follow',
	icons: {
		icon: [
			'favicon-16x16.png',
			'favicon-32x32.png',
			'favicon-96x96.ico',
			'favicon.ico',
			'favicon.192x192.ico',
			'favicon.512x512.ico',
			'favicon.256x256.ico'
		],
		origin: 'https://system-storage.ru'
	},
	openGraph: {
		title: 'Системы хранения',
		description:
			'Купите качественные системы хранения и двери-купе в Санкт-Петербурге по выгодным ценам',
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
			<head>
				<meta name='yandex-verification' content='6c676881d5a0ee82' />
				<Script
					id='tmr-code'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{
						__html: `
							var _tmr = window._tmr || (window._tmr = []);
							_tmr.push({id: "3618541", type: "pageView", start: (new Date()).getTime(), pid: "USER_ID"});
							(function (d, w, id) {
								if (d.getElementById(id)) return;
								var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
								ts.src = "https://top-fwz1.mail.ru/js/code.js";
								var f = function () { var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s); };
								if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
							})(document, window, "tmr-code");
						`
					}}
				/>
			</head>
			<body className=''>
				<Header />
				<main>
					<div className='wrapper'>{children}</div>
				</main>
				<Footer />
			</body>
			<YandexMetrikaSeo enabled={!!(process.env.NODE_ENV === 'production')} />
			<YandexMetrika enabled={!!(process.env.NODE_ENV === 'production')} />
		</html>
	)
}
