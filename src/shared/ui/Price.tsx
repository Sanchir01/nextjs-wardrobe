import { Title } from './Title'

const PriceServices = () => {
	return (
		<section id='price' className='mt-[150px] max-[998px]:mt-20 scroll-my-20'>
			<div className='container'>
				<div className='grid grid-cols-2 gap-5 max-[998px]:grid-cols-1 max-[998px]:place-items-center'>
					<Title
						text={'Стоимость услуг'}
						size='lg'
						className='uppercase font-gilroy font-semibold leading-9 max-w-[clamp(16.875rem,10.441rem+24.51vw,32.5rem)] col-start-2 max-[998px]:col-start-1 text-[clamp(1.125rem,0.765rem+1.373vw,2rem)] max-[998px]:text-center max-[768px]:leading-6'
					/>
				</div>
				<div className='flex flex-col gap-4 text-center mt-10 text-[clamp(0.875rem,0.589rem+0.495vw,1.125rem))] text-wrap'>
					<p>Монтаж из двух дверей – 4500 р.</p>
					<p>Монтаж дополнительной двери – 500 р.</p>
					<p>Подрезка плинтуса (1шт) – 300 р.</p>
					<p>Доставка дверей купе в пределах КАД – 1500 р.</p>
					<p>Каждый километр от КАД – 30 р.</p>
					<p>
						Подъём дверей при невозможности использовать лифт (1 этаж) – 350 р.
					</p>
					<p>Выезд замерщика с образцами – 1500 р.</p>
				</div>
			</div>
		</section>
	)
}

export default PriceServices
