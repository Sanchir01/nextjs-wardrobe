import { Title } from '~/shared/ui/Title'
export const WardrobeContent = [
	{
		title: 'SpaceSaver',
		href: '/img/wardrobe.png'
	},
	{
		title: 'OrganizeIt',
		href: '/img/wardrobe1.png'
	},
	{
		title: 'WardrobeWizard',
		href: '/img/wardrobe2.png'
	},
	{
		title: 'ClosetPro',
		href: '/img/wardrobe3.png'
	},
	{
		title: 'NeatStack',
		href: '/img/wardrobe4.png'
	},
	{
		title: 'StyleBox',
		href: '/img/wardrobe5.png'
	}
]
const WardrobeGrid = () => {
	return (
		<section
			id='wardrobe'
			className='mt-[150px] max-[998px]:mt-20 scroll-my-20'
		>
			<div className='container'>
				<div className='grid grid-cols-2 gap-5 max-[998px]:grid-cols-1 max-[998px]:place-items-center'>
					<Title
						text={'функциональные решения для вашего интерьера'}
						size='lg'
						className='uppercase font-gilroy font-semibold leading-9 max-w-[clamp(16.875rem,10.441rem+24.51vw,32.5rem)] col-start-2 max-[998px]:col-start-1 text-[clamp(1.125rem,0.765rem+1.373vw,2rem)] max-[998px]:text-center max-[768px]:leading-6'
					/>
				</div>
				<div className='mt-5 text-[18px] max-[998px]:hidden'>
					<div className='grid grid-cols-4 gap-5 font-normal '>
						<div>
							<img
								src='/img/wardrobe.png'
								alt='wardrobe'
								className='w-full h-full object-cover'
							/>
							<h6 className='mt-[10px]'>SpaceSaver</h6>
						</div>
						<div>
							<img
								src='/img/wardrobe1.png'
								alt='wardrobe'
								className='w-full h-full object-cover'
							/>
							<h6 className='mt-[10px]'>OrganizeIt</h6>
						</div>
						<p>
							Организуйте пространство с умом и стилем! Наши системы хранения и
							двери-купе помогут вам создать идеальный порядок в вашем доме.
						</p>
						<div>
							<img src='/img/wardrobe2.png' alt='wardrobe' />
							<h6 className='mt-[10px]'>WardrobeWizard</h6>
						</div>
					</div>
					<div className='grid grid-cols-2 mt-5 gap-5 '>
						<div className='grid grid-cols-1'>
							<div className='grid grid-cols-2 gap-5'>
								<div className=''>
									<img
										src='/img/wardrobe3.png'
										alt='wardrobe'
										className=' object-cover '
									/>
									<h6 className='mt-[10px]'>ClosetPro</h6>
								</div>
								<div className='' />
							</div>
							<div className='grid grid-cols-2 gap-5 mt-5'>
								<p className='mt-auto'>
									Удобные, компактные и эстетичные решения для хранения вещей
									сделают ваш интерьер функциональным и современным
								</p>
								<div className=''>
									<img
										src='/img/wardrobe4.png'
										alt='wardrobe'
										className='object-cover h-full w-full'
									/>
									<h6 className='mt-[10px]'>NeatStack</h6>
								</div>
							</div>
						</div>
						<div className='max-w-[760px]'>
							<img
								src='/img/wardrobe5.png'
								alt='wardrobe'
								className='h-full w-full object-cover'
							/>
							<h6 className='mt-[10px]'>StyleBox</h6>
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
					{WardrobeContent.map((item, i) => (
						<div className='max-[768px]:max-w-[350px] mt-4' key={i}>
							<img
								src={item.href}
								className='h-full w-full object-cover max-h-[350px]'
								alt='wardrobe'
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
