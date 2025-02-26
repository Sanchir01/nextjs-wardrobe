import AboutSection from '~/shared/ui/About'
import DoorsSlider from '~/shared/ui/Doors'
import PriceServices from '~/shared/ui/Price'
import Ticker from '~/shared/ui/ticer'
import HeroBlock from '~/widgets/hero'
import ReviewsBlock from '~/widgets/reviews'
import WardrobeGrid from '~/widgets/wardrobe'

const getAllData = async () => {
	return {
		wardrobe: [
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
		],
		doors: [
			{
				href: '/img/door.png',
				alt: 'door',
				loading: 'lazy'
			},
			{
				href: '/img/door1.png',
				alt: 'door',
				loading: 'lazy'
			},
			{
				href: '/img/door2.png',
				alt: 'door',
				loading: 'lazy'
			},
			{
				href: '/img/door3.png',
				alt: 'door',
				loading: 'lazy'
			},
			{
				href: '/img/door4.png',
				alt: 'door',
				loading: 'lazy'
			},
			{
				href: '/img/door5.png',
				alt: 'door',
				loading: 'lazy'
			},
			{
				href: '/img/door6.png',
				alt: 'door',
				loading: 'lazy'
			}
		],
		reviews: [
			{
				image: '/img/reviewuser1.jpg',

				title: 'Бэлла Аникашина',
				alt: 'profile',
				rating: 5,
				text: 'работы выполнены быстро и качественно все очень красиво lorem150'
			},
			{
				image: '/img/reviewuseranon.jpg',
				title: 'Николь Фейст',
				alt: 'profile',
				rating: 5,
				text: 'Очень круто! Быстрая сборка, качественные материалы! Спасибо 🔥'
			},
			{
				image: '/img/reviewuser2.jpg',
				title: 'Дарья Наумова',
				alt: 'profile',
				rating: 5,
				text: 'Все прекрасно! Быстро, качественно! Большое спасибо! Обожаю эти системы!'
			},

			{
				image: '/img/reviewuser3.jpg',
				title: 'Denis Novikov',
				alt: 'profile',
				rating: 5,
				text: 'Отличный мастер, проффесионал своего дела. Товар качественный и удобный в эксплуатации.'
			},
			{
				image: '/img/reviewuser4.jpg',
				title: 'Екатерина Карпова',
				alt: 'profile',
				rating: 5,
				text: 'Спасибо огромное) Все просто отлично! Вовремя , быстро, очень аккуратно и с умом! Всем советую!'
			},
			{
				image: '/img/reviewuser5.jpg',
				title: 'Роза Ханипова',
				alt: 'profile',
				rating: 5,
				text: 'Спасибо вам, оперативно, легко, рекомендую!'
			}
		]
	}
}

export default async function Home() {
	const { wardrobe, doors, reviews } = await getAllData()
	return (
		<>
			<HeroBlock />
			<WardrobeGrid data={wardrobe} />
			<Ticker />
			<AboutSection />
			<DoorsSlider data={doors} />
			<PriceServices />
			<ReviewsBlock data={reviews} />
		</>
	)
}
