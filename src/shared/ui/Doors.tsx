import EmblaSlider from './DefaultSlider'
import Image from './Image'
import { Title } from './Title'
import door1 from '/img/door.png'
import door2 from '/img/door1.png'
import door3 from '/img/door2.png'
import door4 from '/img/door3.png'
import door5 from '/img/door4.png'
import door6 from '/img/door5.png'
import door7 from '/img/door6.png'

export const DoorsContent = [
	{
		href: door1,
		alt: 'door',
		loading: 'lazy'
	},
	{
		href: door2,
		alt: 'door',
		loading: 'lazy'
	},
	{
		href: door3,
		alt: 'door',
		loading: 'lazy'
	},
	{
		href: door4,
		alt: 'door',
		loading: 'lazy'
	},
	{
		href: door5,
		alt: 'door',
		loading: 'lazy'
	},
	{
		href: door6,
		alt: 'door',
		loading: 'lazy'
	},
	{
		href: door7,
		alt: 'door',
		loading: 'lazy'
	}
]

const DoorsSlider = () => {
	return (
		<section id='doors' className='mt-[150px] scroll-my-20 max-[768px]:mt-20'>
			<div className='container'>
				<div className='grid grid-cols-2 gap-5 max-[998px]:grid-cols-1 max-[998px]:place-items-center'>
					<Title
						text='наши двери-купе'
						size='lg'
						className='font-gilroy font-semibold uppercase col-start-2  max-[998px]:col-start-1 text-[clamp(1.125rem,0.765rem+1.373vw,2rem)] max-[998px]:text-center max-[768px]:leading-6'
					/>
				</div>
				<div className='mt-5'>
					<EmblaSlider classNameContainer='gap-5'>
						{DoorsContent.map((item, i) => (
							<article
								className=' relative flex-none w-2/9 h-[350px] max-[768px]:w-1/2  max-[576px]:w-3/4  max-[576px]:h-70 '
								key={i}
							>
								<Image
									src={item.href}
									alt={item.href}
									classname='object-cover  w-full h-full block'
									loading={item.loading}
								/>
							</article>
						))}
					</EmblaSlider>
				</div>
				<div className='grid place-content-center font-normal mt-5 leading-relaxed hyphens-auto text=[clamp(0.75rem,0.647rem+0.392vw,1rem)]'>
					<p className='text-right max-w-[750px] max-[998px]:text-start'>
						Мы предлагаем современные и функциональные
					</p>
					<p className=' max-w-[750px]'>
						решения для организации ваших систем хранения. Наши системы хранения
						и двери-купе помогут вам максимально эффективно использовать
						пространство, создавая комфорт и порядок в вашем доме.решения для
						организации ваших систем хранения
					</p>
				</div>
			</div>
		</section>
	)
}

export default DoorsSlider
