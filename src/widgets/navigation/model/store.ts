import { create } from 'zustand'

interface IState {
    isNavbarHidden: boolean
    setIsNavbarHidden: (isNavbarHidden: boolean | ((prevState: boolean) => boolean)) => void
}

const useNavbarStore = create<IState>((set) => ({
    isNavbarHidden: true,
    setIsNavbarHidden: (value: boolean | ((prevState: boolean) => boolean)) =>
        set((state) => ({
            isNavbarHidden: typeof value === 'function' ? value(state.isNavbarHidden) : value
        }))
}))

export default useNavbarStore
