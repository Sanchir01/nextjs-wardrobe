import Image from 'next/image'
import EmblaSlider from './DefaultSlider'

import TitleBlock from './TitleBlock'

export interface IDoorsSliderProps {
	href: string
	loading: string
	alt: string
}

const DoorsSlider = ({ data }: { data: IDoorsSliderProps[] }) => {
	return (
		<section id='doors' className='mt-[150px] scroll-my-20 max-[768px]:mt-20'>
			<div className='container'>
				<TitleBlock title='наши двери купе' />
				<div className='mt-5'>
					<EmblaSlider classNameContainer='gap-5'>
						{data.map((item, i) => (
							<article
								className=' relative flex-none w-2/9 h-[350px] max-[768px]:w-1/2  max-[576px]:w-3/4  max-[576px]:h-70 '
								key={i}
							>
								<Image
									src={item.href}
									alt={item.alt}
									width={0}
									height={0}
									className='object-cover  w-full h-full block'
									sizes='100vw'
									loading={'lazy'}
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
						решения для организации ваших систем хранения. Наши гардеробные
						системы хранения и двери-купе помогут вам максимально эффективно
						использовать пространство, создавая комфорт и порядок в вашем
						доме.решения для организации ваших систем хранения
					</p>
				</div>
			</div>
		</section>
	)
}

export default DoorsSlider
