'use client'

import React from 'react'

import cn from 'classnames'

import styles from './styles.module.scss'

import LayoutProps from '@/shared/interfaces/layout-props'

import Header from '@/shared/UI/header'
import Footer from '@/shared/UI/footer'
import Intro from '@/widgets/intro/UI'
import Navigation from '@/widgets/navigation/UI'
import Modal from '@/widgets/modal/UI/modal'
import Cookie from '@/widgets/cookie/UI'
import Form from '@/widgets/form/UI'
import Notification from '@/widgets/notification/UI'

import useCookieStore from '@/widgets/cookie/model/store'
import useFormStore from '@/widgets/form/model/store'
import useNotificationStore from '@/widgets/notification/model/store'

interface Props extends LayoutProps {
    page: 'home' | 'products' | 'identity' | 'b2b'
}

const Wrapper = ({ children, page }: Props) => {
    const { isCookieHidden, setIsCookieHidden } = useCookieStore()
    const { isFormHidden, setIsFormHidden } = useFormStore()
    const { isNotificationHidden, setIsNotificationHidden } = useNotificationStore()

    return (
        <div className={styles.wrapper}>
            <Header />
            <Navigation />
            <Modal isHidden={isFormHidden} setIsHidden={setIsFormHidden}>
                <Form />
            </Modal>
            <Modal isHidden={isNotificationHidden} setIsHidden={setIsNotificationHidden}>
                <Notification />
            </Modal>
            <Cookie />
            <Intro page={page} />
            <main className={cn(styles.main, { [styles.expanded]: page === 'home' })}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Wrapper
