import { create } from 'zustand'

import IImage from '@/shared/interfaces/image'

export type Type = 'description' | 'structure' | 'recommendations' | 'contra'

export interface IProduct {
    id: number
    name: string
    brief: string
    description: string
    structure: string
    recommendations: string
    contra: string
    images: IImage[]
}

export interface IState {
    product: IProduct | null
    isHidden: boolean
    setProduct: (product: IProduct) => void
    setIsHidden: (isHidden: boolean) => void
}

const useProductStore = create<IState>((set) => ({
    product: null,
    isHidden: true,
    setProduct: (product: IProduct) => set({ product }),
    setIsHidden: (isHidden: boolean) => set({ isHidden })
}))

export default useProductStore
