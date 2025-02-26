import Link from 'next/link'
import { Title } from '~/shared/ui/Title'

export interface IFooterColumn {
	links: IFooterColumnContent[]
}
export interface IFooterColumnContent {
	title: string
	href: string
}
const footerColumnContent: IFooterColumn[] = [
	{
		links: [
			{ title: 'системы хранения', href: '#wardrobe' },
			{ title: 'двери', href: '#doors' },
			{ title: 'О проекте', href: '#about' },
			{ title: 'отзывы', href: '#reviews' }
		]
	},
	{
		links: [
			{ title: 'telegram', href: 'https://t.me/garderob_sistem' },
			{ title: 'vk', href: 'https://vk.com/sistemy_hranenia_dveri_kupe' },
			{ title: 'mail', href: 'mailto:mail.ru' }
		]
	},
	{
		links: [{ title: '+79213595153', href: 'tel:+79213595153' }]
	}
]

const Footer = () => {
	return (
		<footer className='bg-custom-black text-white  p-10 uppercase max-[998px]:p-5'>
			<div className='container'>
				<div className='flex justify-between gap-5'>
					<div className='flex flex-col justify-between flex-wrap'>
						<div className='flex gap-10 font-normal max-[768px]:gap-5'>
							{footerColumnContent.map((item, i) => (
								<ul key={i} className='flex flex-col gap-5 max-[768px]:3'>
									{item.links.map((content, i) => (
										<li
											key={i}
											className='text-[clamp(0.875rem,0.593rem+0.452vw,1rem)]'
										>
											<Link href={content.href}>{content.title}</Link>
										</li>
									))}
								</ul>
							))}
						</div>
						<p className='pt-24 font-normal'>© 2025 Все права защищены</p>
					</div>
					<Title
						text={'пространсто стиль порядок'}
						size='xs'
						className='font-gilroy max-w-[910px] text-[clamp(2.5rem,-2.5rem+10.417vw,6.875rem)] opacity-9 leading-[clamp(2.5rem,-1.071rem+7.44vw,5.625rem)] font-bold max-[768px]:hidden'
					/>
				</div>
			</div>
		</footer>
	)
}

export default Footer
