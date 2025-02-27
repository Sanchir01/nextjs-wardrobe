'use client'
import Button from '~/shared/ui/Button'
import Logo from '~/shared/ui/Logo'
import cn from 'clsx'
import { useBurger, useSwitchHeader } from '~/shared/store/useSwitchHeader'
import { useShallow } from 'zustand/shallow'
import { useMediaQuery } from '~/shared/hooks/useMediaQuery'
import Link from 'next/link'

export const HeaderNav = [
	{
		title: 'системы хранения',
		href: '#wardrobe'
	},
	{
		title: 'О проекте',
		href: '#about'
	},
	{
		title: 'Двери-купе',
		href: '#doors'
	},
	{
		title: 'Цены',
		href: '#price'
	},
	{
		title: 'Отзывы',
		href: '#reviews'
	}
]

const Header = () => {
	const headerSwitch = useSwitchHeader(state => state.switchHeader)
	const [burger, setBurger] = useBurger(
		useShallow(state => [state.burger, state.toggleBurger])
	)
	const isMedia768 = useMediaQuery('(max-width: 768px)')
	return (
		<header
			className={cn(
				`h-[clamp(2.5rem,1.676rem+3.137vw,4.5rem)] shadow-lg py-3  shadow-bottom-1 fixed left-0 right-0 top-0 shadow-black/10 z-20  border-b border-white/40  backdrop-blur supports-[backdrop-filter]:bg-background/60
				 transition-all duration-500 ease-in max-[998px]:py-2`,
				headerSwitch ? 'bg-custom-black' : ''
			)}
		>
			<div className='container'>
				<div className='flex items-center justify-between '>
					<Logo classname=' max-[768px]:z-1' />
					<nav
						className={cn(
							`text-white uppercase text-[clamp(0.75rem,0.571rem+0.476vw,1rem)] transition-all duration-500 ease-in
							   max-[768px]:absolute max-[768px]:top-0 max-[768px]:right-0
							   max-[768px]:min-h-dvh max-[768px]:backdrop-blur  max-[768px]:supports-[backdrop-filter]:bg-background/60 max-[768px]:max-w-[800px]
							  `,
							burger
								? ' max-[768px]:left-0  max-[768px]:bg-black/90  max-[768px]:p-20'
								: 'max-[768px]:left-[-10000px] '
						)}
						onClick={isMedia768 ? setBurger : () => {}}
					>
						<ul className='flex gap-5 max-[768px]:flex-col max-[768px]:gap-7'>
							{HeaderNav.map((item, i) => (
								<li key={i}>
									<Link href={item.href}>{item.title}</Link>
								</li>
							))}
						</ul>
					</nav>

					<Button classname='px-4 py-2 uppercase text-sm max-[769px]:hidden max-[998px]:text-xs bg-white/50'>
						<Link href='tel:+79213595153' onClick={e => e.stopPropagation}>
							Закать звонок
						</Link>
					</Button>
					<label
						className={cn(
							`min-[768px]:hidden h-[16px] w-6 block relative cursor-pointer transition-all duration-500 ease-in-out z-0`,
							burger ? 'rotate-180' : ''
						)}
						onClick={setBurger}
					>
						<span
							className={cn(
								'absolute w-full h-[2px] bg-white transition-transform duration-500',
								'top-0 left-0',
								burger ? 'rotate-[-45deg] translate-y-[7px]' : ''
							)}
						/>
						<span
							className={cn(
								'absolute w-full h-[2px] bg-white transition-opacity duration-500',
								'top-[7px] left-0',
								burger ? 'opacity-0' : 'opacity-100'
							)}
						/>
						<span
							className={cn(
								'absolute w-full h-[2px] bg-white transition-transform duration-500',
								'bottom-0 left-0',
								burger ? 'rotate-[45deg] -translate-y-[7px]' : ''
							)}
						/>
					</label>
				</div>
			</div>
		</header>
	)
}

export default Header
