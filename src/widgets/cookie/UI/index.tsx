'use client'

import React, { useEffect, useState } from 'react'

import styles from './styles.module.scss'
import cn from 'classnames'
import useCookieStore from '@/widgets/cookie/model/store'
import Link from 'next/link'

const Cookie = () => {
    const { isCookieHidden, setIsCookieHidden } = useCookieStore()

    const accept = () => {
        setIsCookieHidden(true)
    }

    useEffect(() => {
        const savedIsCookieHidden = localStorage.getItem('isCookieHidden')

        if (!savedIsCookieHidden) {
            localStorage.setItem('isCookieHidden', 'false')
        }
    }, [])

    return (
        <div className={cn(styles.wrapper, { [styles.hidden]: isCookieHidden })}>
            <p>
                Мы используем файлы cookie – они помогают нам сделать ресурс удобнее для Вас.
                Посещая наш сайт, вы соглашаетесь на обработку данных в рамках{' '}
                <Link href='/'>Политики конфиденциальности</Link>
            </p>
            <button className={styles.button} onClick={() => accept()}>
                ok
            </button>
        </div>
    )
}

export default Cookie
