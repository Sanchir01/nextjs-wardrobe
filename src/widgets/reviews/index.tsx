import EmblaSlider from '~/shared/ui/DefaultSlider'
import ReviewCart from '~/shared/ui/ReviewCart'
import { Title } from '~/shared/ui/Title'

export interface IReviewBlock {
	image: string
	title: string
	alt: string
	rating: number
	text: string
}

const ReviewsBlock = ({ data }: { data: IReviewBlock[] }) => {
	return (
		<div
			id='reviews'
			className='mt-[150px]  scroll-mt-[80px] mb-[120px] max-[998px]:mt-20 max-[998px]:pb-20 scroll-my-20'
		>
			<div className='container relative'>
				<div className='grid grid-cols-2 gap-5 max-[998px]:grid-cols-1 max-[998px]:place-items-center'>
					<Title
						text={'наши клиенты'}
						size='lg'
						className='uppercase font-gilroy font-semibold leading-9 max-w-[clamp(16.875rem,10.441rem+24.51vw,32.5rem)] col-start-2 max-[998px]:col-start-1 text-[clamp(1.125rem,0.765rem+1.373vw,2rem)] max-[998px]:text-center max-[768px]:leading-6'
					/>
				</div>
				<div className='mt-5'>
					<EmblaSlider arrows classNameContainer='gap-5'>
						{data.map(({ alt, image, rating, text, title }, i) => (
							<ReviewCart
								key={i}
								image={image}
								title={title}
								alt={alt}
								text={text}
								rating={rating}
							/>
						))}
					</EmblaSlider>
				</div>
			</div>
		</div>
	)
}

export default ReviewsBlock
