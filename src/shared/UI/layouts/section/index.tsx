import { ReactNode } from 'react'

import styles from './styles.module.scss'

import LayoutProps from '@/shared/interfaces/layout-props'

import Container from '@/shared/UI/layouts/container'

interface Props extends LayoutProps {
    heading: string | ReactNode
    id?: string
}

const Section = ({ children, heading, id }: Props) => {
    const props = id ? { id } : {}

    return (
        <section {...props} className={styles.section}>
            <Container>
                <div className={styles.wrapper}>
                    <h2 className={styles.heading}>{heading}</h2>
                </div>
                {children}
            </Container>
        </section>
    )
}

export default Section
