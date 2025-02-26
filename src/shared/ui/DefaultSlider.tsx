import useEmblaCarousel from 'embla-carousel-react'
import { IChildren } from '../types'
import cn from 'clsx'
import { useCallback, useEffect, useState } from 'react'
import Image from './Image'
export interface IEmblaSliderProps extends IChildren {
	classname?: string
	arrows?: boolean
	classNameContainer?: string
	loop?: boolean
}
const EmblaSlider = ({
	children,
	arrows = false,
	classname,
	classNameContainer,
	loop
}: IEmblaSliderProps) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop })
	const [canNext, setCanNext] = useState(true)
	const [canPrev, setCanPrev] = useState(false)
	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev()
	}, [emblaApi])

	const scrollNext = useCallback(() => {
		if (emblaApi?.canScrollNext) emblaApi.scrollNext()
	}, [emblaApi])

	const updateScrollState = useCallback(() => {
		if (!emblaApi) return
		setCanPrev(emblaApi.canScrollPrev())
		setCanNext(emblaApi.canScrollNext())
	}, [emblaApi])

	useEffect(() => {
		if (!emblaApi) return

		updateScrollState()
		const handler = () => updateScrollState()
		emblaApi.on('select', handler)

		return () => {
			emblaApi.off('select', handler)
		}
	}, [emblaApi, updateScrollState])
	return (
		<div ref={emblaRef} className={cn('overflow-hidden ', classname)}>
			<div className={cn('flex items-center', classNameContainer)}>
				{children}
			</div>
			{arrows ? (
				<div className='flex gap-2 absolute w-22 right-10 top-[-20px] z-20 max-[998px]:hidden'>
					<button disabled={!canPrev} onClick={scrollPrev}>
						<Image
							src={'/img/arrowl.svg'}
							alt={'arrow left'}
							classname={cn('cursor-pointer ', {
								'opacity-70 cursor-not-allowed ': !canPrev,
								'hover:opacity-70': canPrev
							})}
						/>
					</button>
					<button disabled={!canNext} onClick={scrollNext}>
						<Image
							src={'/img/arrowr.svg'}
							alt={'arrow right'}
							classname={cn('cursor-pointer', {
								'opacity-30 cursor-not-allowed ': !canNext,
								'hover:opacity-70': canPrev
							})}
						/>
					</button>
				</div>
			) : (
				<></>
			)}
		</div>
	)
}

export default EmblaSlider
