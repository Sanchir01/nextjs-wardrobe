import { useCallback, useRef } from 'react'

export function useIntersection(onIntersect: () => void) {
	const unsubscribe = useRef(() => {})
	return useCallback((el: HTMLDivElement | null) => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(intersection => {
					if (
						intersection.isIntersecting &&
						intersection.intersectionRatio < 0.8 &&
						intersection.intersectionRatio > 0
					) {
						onIntersect()
					}
				})
			},
			{
				threshold: [0.8, 0, 1]
			}
		)
		if (el) {
			observer.observe(el)
			unsubscribe.current = () => observer.disconnect()
		} else {
			unsubscribe.current()
		}
	}, [])
}
