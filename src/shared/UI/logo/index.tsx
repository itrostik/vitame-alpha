'use client'

import Link from 'next/link'
import Image from 'next/image'

import styles from './styles.module.scss'
import handleLinkClick from '@/shared/utils/handle-link-click'

const Logo = () => {
    return (
        <Link className={styles.logo} href='/'>
            <Image src='/images/logo.svg' alt='Vitame' width={90} height={25} />
        </Link>
    )
}

export default Logo
