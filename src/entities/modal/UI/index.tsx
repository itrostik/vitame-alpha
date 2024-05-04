'use client'

import { MouseEvent, useEffect, useState } from 'react'

import { createPortal } from 'react-dom'

import Image from 'next/image'

import cn from 'classnames'

import { motion } from 'framer-motion'

import styles from './styles.module.scss'

import IImage from '@/shared/interfaces/image'

import useProductStore, { IProduct, Type } from '@/entities/product/model/store'
import Chevron from '@/shared/UI/icons/chevron'
import { useRouter } from 'next/navigation'

const Modal = ({ product }: { product: IProduct }) => {
    const [isLoading, setIsLoading] = useState(true)

    const router = useRouter()

    const tabs = [
        {
            title: 'Описание',
            state: 'description'
        },
        {
            title: 'Состав',
            state: 'structure'
        },
        {
            title: 'Рекомендации по применению',
            state: 'recommendations'
        },
        {
            title: 'Противопоказания',
            state: 'contra'
        }
    ]

    const transition = {
        type: 'spring',
        stiffness: 700,
        damping: 40
    }

    const [preview, setPreview] = useState<IImage>()
    const [type, setType] = useState<Type>()

    const handleClick = (event: any) => {
        if (event.target.classList.contains(styles.overlay)) {
            close()
        }
    }

    const handleTabClick = (tab: Type) => {
        setType(tab)
    }

    useEffect(() => {
        if (product) {
            setType('description')
            setPreview(product.images[0])
        }
    }, [product])

    if (!product || !preview) {
        return null
    }

    return (
        <div className={styles.shell}>
            <button
                className={cn(styles.backButton, styles.mobile)}
                onClick={() => router.push('/products')}
            >
                <Chevron />
                <span>Назад в каталог</span>
            </button>
            <div className={styles.modal}>
                <div className={styles.info}>
                    <div className={styles.images}>
                        {product.images.length > 1 && (
                            <div className={styles.mini}>
                                {product.images.map((image, index) => (
                                    <Image
                                        key={index}
                                        src={`/images/${image.src}`}
                                        alt={image.alt}
                                        width={85}
                                        height={85}
                                        onClick={() => setPreview(image)}
                                    />
                                ))}
                            </div>
                        )}
                        <div className={styles.column}>
                            <Image
                                className={styles.image}
                                src={`/images/${preview.src}`}
                                alt={preview.alt}
                                width={415}
                                height={415}
                                loading='eager'
                                onLoadingComplete={() => setIsLoading(false)}
                            />
                            <button
                                className={cn(styles.backButton, styles.desktop)}
                                onClick={() => router.push('/products')}
                            >
                                <Chevron />
                                <span>Назад в каталог</span>
                            </button>
                        </div>
                    </div>
                    <div className={styles.wrapper}>
                        <h2 className={styles.title}>{product.name}</h2>
                        <div className={styles.items}>
                            <div className={styles.tape}>
                                <div className={styles.tabs}>
                                    {tabs.map((tab, index) => {
                                        return (
                                            <button
                                                key={index}
                                                className={cn(styles.tab, {
                                                    [styles.selected]: type === tab.state
                                                })}
                                                onClick={() => handleTabClick(tab.state as Type)}
                                            >
                                                {tab.title}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className={styles.description}>
                                {type && <p className={styles.text}>{product[type]}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
