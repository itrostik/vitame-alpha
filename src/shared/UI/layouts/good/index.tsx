'use client'

import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import Header from '@/shared/UI/header'
import Navigation from '@/widgets/navigation/UI'
import Modal from '@/widgets/modal/UI/modal'
import Form from '@/widgets/form/UI'
import Product from '@/entities/modal/UI'
import useNavbarStore from '@/widgets/navigation/model/store'
import { IProduct } from '@/entities/product/model/store'
import useFormStore from '@/widgets/form/model/store'
import Cookie from '@/widgets/cookie/UI'
import useCookieStore from '@/widgets/cookie/model/store'

const Good = ({ product }: { product: IProduct }) => {
    const { isCookieHidden, setIsCookieHidden } = useCookieStore()
    const { isFormHidden, setIsFormHidden } = useFormStore()

    return (
        <div className={styles.wrapper}>
            <Header />
            <Navigation />
            <Cookie />
            <Modal isHidden={isFormHidden} setIsHidden={setIsFormHidden}>
                <Form />
            </Modal>
            <Product product={product} />
        </div>
    )
}

export default Good
