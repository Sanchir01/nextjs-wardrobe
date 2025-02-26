import EmblaSlider from '~/shared/ui/DefaultSlider'
import ReviewCart from '~/shared/ui/ReviewCart'
import { Title } from '~/shared/ui/Title'
import UserPhoto1 from '/img/reviewuser1.jpg'
import UserPhoto2 from '/img/reviewuser2.jpg'
import UserPhoto3 from '/img/reviewuser3.jpg'
import UserPhoto4 from '/img/reviewuser4.jpg'
import UserPhoto5 from '/img/reviewuser5.jpg'
import UserPhotoAnon from '/img/reviewuseranon.jpg'

export const UserReviews = [
	{
		image: UserPhoto1,

		title: 'Бэлла Аникашина',
		alt: 'profile',
		rating: 5,
		text: 'работы выполнены быстро и качественно все очень красиво lorem150'
	},
	{
		image: UserPhotoAnon,
		title: 'Николь Фейст',
		alt: 'profile',
		rating: 5,
		text: 'Очень круто! Быстрая сборка, качественные материалы! Спасибо 🔥'
	},
	{
		image: UserPhoto2,
		title: 'Дарья Наумова',
		alt: 'profile',
		rating: 5,
		text: 'Все прекрасно! Быстро, качественно! Большое спасибо! Обожаю эти системы!'
	},

	{
		image: UserPhoto3,
		title: 'Denis Novikov',
		alt: 'profile',
		rating: 5,
		text: 'Отличный мастер, проффесионал своего дела. Товар качественный и удобный в эксплуатации.'
	},
	{
		image: UserPhoto4,
		title: 'Екатерина Карпова',
		alt: 'profile',
		rating: 5,
		text: 'Спасибо огромное) Все просто отлично! Вовремя , быстро, очень аккуратно и с умом! Всем советую!'
	},
	{
		image: UserPhoto5,
		title: 'Роза Ханипова',
		alt: 'profile',
		rating: 5,
		text: 'Спасибо вам, оперативно, легко, рекомендую!'
	}
]

const ReviewsBlock = () => {
	return (
		<div
			id='reviews'
			className='mt-[150px]  scroll-mt-[80px] pb-30 max-[998px]:mt-20 max-[998px]:pb-20 scroll-my-20'
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
						{UserReviews.map(({ alt, image, rating, text, title }, i) => (
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
