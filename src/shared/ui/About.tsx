import { Title } from './Title'
import TitleBlock from './TitleBlock'
const AboutSection = () => {
	return (
		<section
			id='about'
			className='mt-[150px] max-[768px]:mt-20 max-[576px]:mt-10 scroll-my-20 '
		>
			<div className='container'>
				<TitleBlock title='Организуйте свою систему хранения с умом!' />
				<div className='grid grid-cols-6 max-[998px]:hidden '>
					<Title
						text='системы хранения и двери-купе помогут навести  порядок и создать стильное пространство'
						size='lg'
						className='col-start-3 col-end-7 font-gilroy uppercase font-semibold max-w-[980px] text-[clamp(1.125rem,0.765rem+1.373vw,2rem)]'
					/>
				</div>
				<div className='grid grid-cols-6 mt-5 font-normal max-[998px]:grid-cols-4 max-[998px]:place-items-center '>
					<div className='col-start-3 col-end-6 flex gap-[30px] max-[998px]:col-start-1 '>
						<p className='max-w-[383px]  '>
							системы хранения и двери-купе — это идеальное решение для тех, кто
							ценит порядок и стиль. Забудьте о беспорядке и бесконечных поисках
							нужных вещей. С нашими системами хранения вы сможете максимально
							эффективно использовать пространство.
						</p>
						<p className='max-w-[383px] max-[576px]:hidden'>
							Больше не нужно тратить драгоценные минуты на разбор завалов в
							шкафу. Все вещи будут на своих местах, а двери-купе добавят
							элегантности и современности вашему интерьеру. Наслаждайтесь
							каждым моментом, проведенным в своем доме.
						</p>
					</div>
				</div>
			</div>
			<div className="bg-[url('/img/bgabout.png')] min-h-[360px]  bg-no-repeat bg-cover bg-center mt-10 max-[768px]:min-h-[300px] max-[576px]:mt-[10px]" />
			<div className='container  min-[576px]:hidden '>
				<div className='grid grid-cols-1 place-items-center pt-[10px] text=[clamp(0.75rem,0.647rem+0.392vw,1rem)]'>
					<p className='max-w-[383px] content-center'>
						Больше не нужно тратить драгоценные минуты на разбор завалов в
						шкафу. Все вещи будут на своих местах, а двери-купе добавят
						элегантности и современности вашему интерьеру. Наслаждайтесь каждым
						моментом, проведенным в своем доме.
					</p>
				</div>
			</div>
		</section>
	)
}

export default AboutSection
