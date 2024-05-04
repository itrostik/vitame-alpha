'use client'

import React from 'react'

import Wrapper from '@/shared/UI/layouts/wrapper'
import styles from '@/shared/styles/pages/not-found.module.scss'
import Header from '@/shared/UI/header'
import Navigation from '@/widgets/navigation/UI'
import Modal from '@/widgets/modal/UI/modal'
import Form from '@/widgets/form/UI'
import Notification from '@/widgets/notification/UI'
import Cookie from '@/widgets/cookie/UI'
import Intro from '@/widgets/intro/UI'
import cn from 'classnames'
import Footer from '@/shared/UI/footer'
import useCookieStore from '@/widgets/cookie/model/store'
import useFormStore from '@/widgets/form/model/store'
import { useRouter } from 'next/navigation'

const NotFound = () => {
    const { isFormHidden, setIsFormHidden } = useFormStore()

    const router = useRouter()

    return (
        <div className={styles.wrapper}>
            <Header />
            <Navigation />
            <main className={styles.main}>
                <div className={styles.container}>
                    <h2 className={styles.subheading}>404</h2>
                    <h1 className={cn(styles.heading, styles.accent)}>Здесь ничего нет :(</h1>
                    <div className={styles.buttons}>
                        <button className={styles.button} onClick={() => router.push('/products')}>
                            Перейти в каталог
                        </button>
                        <button className={styles.button} onClick={() => router.push('/')}>
                            Перейти на главную
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default NotFound
