'use client'

import { MouseEvent, ReactNode, useEffect, useState } from 'react'

import { createPortal } from 'react-dom'

import Image from 'next/image'

import cn from 'classnames'

import { motion } from 'framer-motion'

import styles from '../../../entities/product/UI/styles.module.scss'

import IImage from '@/shared/interfaces/image'

import useProductStore, { Type } from '@/entities/product/model/store'
import Cross from '@/shared/UI/icons/cross'

interface Props {
    children: ReactNode
    isHidden: boolean
    setIsHidden: (isHidden: boolean) => void
}

const Modal = ({ isHidden, setIsHidden, children }: Props) => {
    const [isLoading, setIsLoading] = useState(true)

    const variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1
        }
    }

    const transition = {
        type: 'spring',
        stiffness: 700,
        damping: 40
    }

    const close = () => {
        setIsHidden(true)
    }

    const handleClick = (event: any) => {
        if (event.target.classList.contains(styles.overlay)) {
            close()
        }
    }

    useEffect(() => {
        const body = document.body
        body.style.overflow = isHidden ? '' : 'hidden'
        return () => {
            body.style.overflow = ''
        }
    }, [isHidden])

    return (
        <motion.div
            className={cn(styles.overlay, { [styles.hidden]: isHidden })}
            variants={variants}
            animate={isHidden ? 'hidden' : 'visible'}
            initial='hidden'
            transition={transition}
            onClick={(event) => handleClick(event)}
        >
            <div className={styles.modal}>
                <button className={styles.close} onClick={() => close()}>
                    <Cross color='#363847' />
                </button>
                {children}
            </div>
        </motion.div>
    )
}

export default Modal
