import { Title } from './Title'

const TitleBlock = ({ title }: { title: string }) => {
	return (
		<div className='grid grid-cols-2 gap-5 max-[998px]:grid-cols-1 max-[998px]:place-items-center'>
			<Title
				text={title}
				size='lg'
				className='font-gilroy font-semibold uppercase col-start-2  max-[998px]:col-start-1 text-[clamp(1.125rem,0.765rem+1.373vw,2rem)] max-[998px]:text-center max-[768px]:leading-6'
			/>
		</div>
	)
}

export default TitleBlock
