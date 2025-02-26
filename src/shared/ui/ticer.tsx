import { FC } from 'react'

const Ticker: FC = () => {
	return (
		<section className=' overflow-hidden bg-gray mt-[150px] max-[768px]:mt-20  max-[576px]:mt-10'>
			<div className='flex py-5 uppercase text-white text-[clamp(1rem,0.485rem+1.961vw,2.25rem)] max-[768px]:py-3'>
				<div className='whitespace-nowrap shrink-0 px-12 animate-ticker'>
					стиль, порядок и пространство для вашей жизни
				</div>
				<div className='whitespace-nowrap shrink-0 px-12 animate-ticker'>
					стиль, порядок и пространство для вашей жизни
				</div>
				<div className='whitespace-nowrap shrink-0 px-12 animate-ticker'>
					стиль, порядок и пространство для вашей жизни
				</div>
				<div className='whitespace-nowrap shrink-0 px-12 animate-ticker'>
					стиль, порядок и пространство для вашей жизни
				</div>
				<div className='whitespace-nowrap shrink-0 px-12  animate-ticker'>
					стиль, порядок и пространство для вашей жизни
				</div>
			</div>
		</section>
	)
}

export default Ticker
