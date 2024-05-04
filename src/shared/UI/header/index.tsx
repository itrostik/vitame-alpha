'use client'

import React, { useEffect, useState } from 'react'

import { createPortal } from 'react-dom'

import cn from 'classnames'

import styles from './styles.module.scss'

import useNavbarStore from '@/widgets/navigation/model/store'

import { addScrollPrevention, removeScrollPrevention } from '@/shared/scroll'

import Logo from '@/shared/UI/logo'
import Container from '@/shared/UI/layouts/container'

import Navbar from '@/widgets/navbar/UI'
import Navigation from '@/widgets/navigation/UI'

import Hamburger from '@/shared/UI/icons/hamburger'
import Cross from '@/shared/UI/icons/cross'

const Header = () => {
    const { isNavbarHidden, setIsNavbarHidden } = useNavbarStore()

    useEffect(() => {
        if (isNavbarHidden) {
            removeScrollPrevention()
        } else {
            addScrollPrevention()
        }

        const handleResize = () => {
            if (window.innerWidth >= 992) {
                setIsNavbarHidden(true)
            }
        }

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [isNavbarHidden])

    const handleClick = () => setIsNavbarHidden((prevState) => !prevState)

    return (
        <div className={cn(styles.header, { [styles.meta]: isNavbarHidden })}>
            <Container>
                <Logo />
                <Navbar />
                <div className={styles.mobile}>
                    <button className={styles.button} onClick={() => handleClick()}>
                        {isNavbarHidden ? <Hamburger /> : <Cross />}
                    </button>
                </div>
            </Container>
        </div>
    )
}

export default Header
