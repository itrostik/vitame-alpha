'use client'

import { create } from 'zustand'

interface IState {
    isCookieHidden: boolean
    setIsCookieHidden: (isCookieHidden: boolean | ((prevState: boolean) => boolean)) => void
}

const useCookieStore = create<IState>((set) => ({
    isCookieHidden: true,
    setIsCookieHidden: (value: boolean | ((prevState: boolean) => boolean)) =>
        set((state) => ({
            isCookieHidden: typeof value === 'function' ? value(state.isCookieHidden) : value
        }))
}))

if (typeof window !== 'undefined') {
    useCookieStore.subscribe((state) => {
        localStorage.setItem('isCookieHidden', JSON.stringify(state.isCookieHidden))
    })

    const savedIsCookieHidden = localStorage.getItem('isCookieHidden')

    if (savedIsCookieHidden) {
        useCookieStore.setState({ isCookieHidden: JSON.parse(savedIsCookieHidden) })
    }
}

export default useCookieStore
