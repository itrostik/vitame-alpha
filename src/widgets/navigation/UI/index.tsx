'use client'

import React from 'react'

import { createPortal } from 'react-dom'

import Link from 'next/link'

import cn from 'classnames'

import styles from './styles.module.scss'

import useNavbarStore from '@/widgets/navigation/model/store'

import handleLinkClick from '@/shared/utils/handle-link-click'
import { usePathname, useRouter } from 'next/navigation'
import useFormStore from '@/widgets/form/model/store'

export const links = [
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
  },
  {
    href: '/blog',
    name: 'Блог'
  },
  {
    href: '/partnership',
    name: 'Партнерам'
  }
]

const Navigation = () => {
  const { isNavbarHidden, setIsNavbarHidden } = useNavbarStore()

  const { setIsFormHidden } = useFormStore()

  const router = useRouter()
  const pathname = usePathname()

  return (
    <nav className={cn(styles.navbar, { [styles.hidden]: isNavbarHidden })}>
      <div className={styles.links}>
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
      </div>
    </nav>
  )
}

export default Navigation
