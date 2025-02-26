import { create } from 'zustand'

export interface IUseSwitchHeader {
	switchHeader: boolean
	setSwitchHeader: () => void
}
export interface IToggleBurger {
	burger: boolean
	toggleBurger: () => void
}
export const useSwitchHeader = create<IUseSwitchHeader>((set, get) => ({
	switchHeader: false,
	setSwitchHeader: () => set({ switchHeader: !get().switchHeader })
}))

export const useBurger = create<IToggleBurger>((set, get) => ({
	burger: false,
	toggleBurger: () => {
		const newState = !get().burger

		if (newState) {
			document.body.classList.add('overflow-hidden')
		} else {
			document.body.classList.remove('overflow-hidden')
		}
		set({ burger: newState })
	}
}))
