import React from 'react'

import styles from '@/shared/styles/pages/home.module.scss'

import Wrapper from '@/shared/UI/layouts/wrapper'

import Products from '@/widgets/products/UI'
import Approach from '@/widgets/approach/UI'
import Priority from '@/widgets/priority/UI'
import Items from '@/widgets/intro/UI/items'
import { Content } from '@/widgets/products/UI/content'
import Container from '@/shared/UI/layouts/container'

const Page = () => {
    return (
        <Wrapper page='products'>
            <div className={styles.top}>
                <div className={styles.mobile}>
                    <Items page='products' />
                </div>

                <div id='products'>
                    <Container>
                        <Content />
                    </Container>
                </div>
            </div>

            <Approach />
            <div id='attachments' className={styles.desktop}>
                <Priority />
            </div>
        </Wrapper>
    )
}

export default Page
