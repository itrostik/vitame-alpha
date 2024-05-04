import React from 'react'

import Link from 'next/link'

import styles from './styles.module.scss'

import handleLinkClick from '@/shared/utils/handle-link-click'
import { usePathname, useRouter } from 'next/navigation'
import useFormStore from '@/widgets/form/model/store'

const Navbar = () => {
    const { setIsFormHidden } = useFormStore()

    const links = [
        {
            href: '#reason',
            name: 'О нас'
        },
        {
            href: '#approach',
            name: 'Научный подход'
        },
        {
            href: '/products',
            name: 'Продукты'
        }
    ]

    const router = useRouter()
    const pathname = usePathname()

    return (
        <nav className={styles.navbar}>
            {links.map((link, index) => {
                return (
                    <Link
                        key={index}
                        className={styles.link}
                        href={link.href}
                        onClick={(event) => handleLinkClick(event, link.href, pathname, router)}
                    >
                        {link.name}
                    </Link>
                )
            })}
            <button className={styles.button} onClick={() => setIsFormHidden(false)}>
                Поставить витамат
            </button>
        </nav>
    )
}

export default Navbar
