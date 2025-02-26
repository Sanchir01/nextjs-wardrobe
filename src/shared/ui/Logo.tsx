import Image from 'next/image'
import Link from 'next/link'

const Logo = ({ classname }: { classname?: string }) => (
	<Link href='#hero' className={classname}>
		<Image
			src='/img/logo.svg'
			width={140}
			height={40}
			alt='Logo'
			className='max-w-[clamp(4.688rem,2.757rem+7.353vw,9.375rem)]'
		/>
	</Link>
)
export default Logo
