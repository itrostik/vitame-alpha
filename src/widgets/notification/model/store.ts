import { create } from 'zustand'

interface IState {
    isNotificationHidden: boolean
    setIsNotificationHidden: (
        isNotificationHidden: boolean | ((prevState: boolean) => boolean)
    ) => void
}

const useNotificationStore = create<IState>((set) => ({
    isNotificationHidden: true,
    setIsNotificationHidden: (value: boolean | ((prevState: boolean) => boolean)) =>
        set((state) => ({
            isNotificationHidden:
                typeof value === 'function' ? value(state.isNotificationHidden) : value
        }))
}))

export default useNotificationStore
