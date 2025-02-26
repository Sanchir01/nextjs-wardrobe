const Logo = ({ classname }: { classname?: string }) => (
	<a href='#hero' className={classname}>
		<img
			src='/img/logo.svg'
			width={140}
			height={40}
			alt='Logo'
			className='max-w-[clamp(4.688rem,2.757rem+7.353vw,9.375rem)]'
		/>
	</a>
)
export default Logo
