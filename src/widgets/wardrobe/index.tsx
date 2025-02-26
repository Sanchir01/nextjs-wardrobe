import Image from 'next/image'
import TitleBlock from '~/shared/ui/TitleBlock'

export interface IWardrobeProps {
	title: string
	href: string
}

const WardrobeGrid = ({ data }: { data: IWardrobeProps[] }) => {
	return (
		<section
			id='wardrobe'
			className='mt-[150px] max-[998px]:mt-20 scroll-my-20'
		>
			<div className='container'>
				<TitleBlock title='функциональные решения для вашего интерьера' />
				<div className='mt-5 text-[18px] max-[998px]:hidden'>
					<div className='grid grid-cols-4 gap-5 font-normal '>
						<div>
							<Image
								src={data[0].href}
								width={0}
								height={0}
								sizes='100vw'
								alt='wardrobe'
								className='h-full w-full object-cover'
							/>
							<h6 className='mt-[10px]'>{data[0].title}</h6>
						</div>
						<div>
							<Image
								src={data[1].href}
								width={0}
								height={0}
								sizes='100vw'
								alt='wardrobe'
								className='h-full w-full object-cover'
							/>
							<h6 className='mt-[10px]'>{data[1].title}</h6>
						</div>
						<p>
							Организуйте пространство с умом и стилем! Наши системы хранения и
							двери-купе помогут вам создать идеальный порядок в вашем доме.
						</p>
						<div>
							<Image
								src={data[2].href}
								alt='wardrobe'
								width={0}
								height={0}
								sizes='100vw'
								className='h-full w-full object-cover'
							/>
							<h6 className='mt-[10px]'>{data[2].title}</h6>
						</div>
					</div>
					<div className='grid grid-cols-2 mt-12 gap-5 '>
						<div className='grid grid-cols-1'>
							<div className='grid grid-cols-2 gap-5'>
								<div className=''>
									<Image
										src={data[3].href}
										alt='wardrobe'
										width={0}
										height={0}
										sizes='100vw'
										className='h-full w-full object-cover'
									/>
									<h6 className='mt-[10px]'>{data[3].title}</h6>
								</div>
								<div className='' />
							</div>
							<div className='grid grid-cols-2 gap-5 mt-5'>
								<p className='mt-auto'>
									Удобные, компактные и эстетичные решения для хранения вещей
									сделают ваш интерьер функциональным и современным
								</p>
								<div className=''>
									<Image
										src={data[4].href}
										alt='wardrobe'
										width={0}
										sizes='100vw'
										height={0}
										className='object-cover h-full w-full'
									/>
									<h6 className='mt-[10px]'>{data[5].title}</h6>
								</div>
							</div>
						</div>
						<div className='max-w-[760px] '>
							<Image
								width={0}
								height={0}
								src={data[5].href}
								alt='wardrobe'
								sizes='100vw'
								className='h-full w-full object-cover'
							/>
							<h6 className='mt-[10px]'>{data[5].title}</h6>
						</div>
					</div>
				</div>
				<div className='grid grid-cols-1 place-items-center'>
					<p className='mt-4 min-[998px]:hidden   max-[576px]:max-w-[350px] '>
						Организуйте пространство с умом и стилем! Наши системы хранения и
						двери-купе помогут вам создать идеальный порядок в вашем доме.
					</p>
				</div>

				<div className=' min-[998px]:hidden max-[998px]:grid  max-[998px]:grid-cols-3 place-items-center   max-[998px]:gap-x-5 max-[998px]:gap-y-5  max-[768px]:grid-cols-2 max-[576px]:grid-cols-1 max-[576px]:gap-y-[5px] gap-[10px] mt-4'>
					{data.map((item, i) => (
						<div
							className='max-[998px]:w-[220px] max-[768px]:w-[280px]  max-[576px]:w-[300px] mt-4'
							key={i}
						>
							<Image
								src={item.href}
								width={0}
								height={0}
								sizes='100vw'
								className='h-full w-full object-cover '
								loading='lazy'
								alt={item.title}
							/>
							<h6 className='mt-[10px]'>{item.title}</h6>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default WardrobeGrid
