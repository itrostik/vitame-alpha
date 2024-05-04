import { create } from 'zustand'

interface IState {
    isFormHidden: boolean
    setIsFormHidden: (isFormHidden: boolean | ((prevState: boolean) => boolean)) => void
}

const useFormStore = create<IState>((set) => ({
    isFormHidden: true,
    setIsFormHidden: (value: boolean | ((prevState: boolean) => boolean)) =>
        set((state) => ({
            isFormHidden: typeof value === 'function' ? value(state.isFormHidden) : value
        }))
}))

export default useFormStore
