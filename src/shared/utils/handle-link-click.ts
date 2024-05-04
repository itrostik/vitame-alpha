'use client'

import { MouseEvent } from 'react'

import useNavbarStore from '@/widgets/navigation/model/store'

import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

const handleLinkClick = (
    e: MouseEvent,
    href: string,
    pathname: string,
    router: AppRouterInstance
) => {
    const { isNavbarHidden, setIsNavbarHidden } = useNavbarStore.getState()

    if (href === '#reason' && pathname !== '/') {
        router.push('/#reason')
    }

    if (!isNavbarHidden) {
        setIsNavbarHidden(true)
    }

    if (href[0] !== '#') {
        return
    }

    e.preventDefault()

    if (typeof window !== 'undefined' && 'scrollBehavior' in document.documentElement.style) {
        const element = document.querySelector(href)
        if (element) {
            const top = element.getBoundingClientRect().top + window.pageYOffset
            const offsetTop = top - 150

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            })
        }
    } else {
        window.location.href = href
    }
}

export default handleLinkClick
