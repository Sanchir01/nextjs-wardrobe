import { Title } from './Title'
import TitleBlock from './TitleBlock'

const PriceServices = () => {
	return (
		<section id='price' className='mt-[150px] max-[998px]:mt-20 scroll-my-20'>
			<div className='container'>
				<TitleBlock title='Стоимость услуг' />
				<div className='grid grid-cols-2 text-center mt-10   max-[998px]:flex max-[998px]:flex-col max-[998px]:gap-10'>
					<div className='flex flex-col gap-4 text-wrap'>
						<Title
							text={'услуги на системы хранения'}
							className='text-[clamp(1.063rem,0.779rem+1.078vw,1.75rem)] uppercase'
							size='md'
						/>
						<div className='flex flex-col gap-2 text-[clamp(0.938rem,0.86rem+0.294vw,1.125rem)]'>
							<p>Монтаж 10% от стоимости системы (минимум 1500)</p>
							<p>Доставка в пределах КАД – 1000 р.</p>
							<p>Каждый километр от КАД – 30 р.</p>
							<p>
								Подъём при невозможности использовать лифт (1 этаж) – 200 р.
							</p>
							<p>
								Подрезка элементов (кроме несущего рельса и перекладины для
								вешалок) – 100 р.
							</p>
							<p>Выезд замерщика – 1500 р.</p>
						</div>
					</div>
					<div className='flex flex-col gap-4 text-wrap'>
						<Title
							text={'Услуги на двери купе'}
							size='lg'
							className='text-[clamp(1.063rem,0.779rem+1.078vw,1.75rem)] uppercase'
						/>
						<div className='flex flex-col gap-2 text-[clamp(0.938rem,0.86rem+0.294vw,1.125rem)]'>
							<p>Монтаж из двух дверей – 4500 р.</p>
							<p>Монтаж дополнительной двери – 500 р.</p>
							<p>Подрезка плинтуса (1шт) – 300 р.</p>
							<p>Доставка дверей купе в пределах КАД – 1500 р.</p>
							<p>Каждый километр от КАД – 30 р.</p>
							<p>
								Подъём дверей при невозможности использовать лифт (1 этаж) – 350
								р.
							</p>
							<p>Выезд замерщика с образцами – 1500 р.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default PriceServices
