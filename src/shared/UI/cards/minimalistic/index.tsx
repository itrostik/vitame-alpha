import { ReactNode } from 'react'

import Image from 'next/image'

import styles from './styles.module.scss'

import IImage from '@/shared/interfaces/image'

interface Props {
    heading: string | ReactNode
    image: IImage
}

const Index = ({ heading, image }: Props) => {
    return (
        <div className={styles.card}>
            {/*<Image className={styles.image} src={image.src} alt={image.alt} width={400} height={400} />*/}
            <h3 className={styles.heading}>{heading}</h3>
        </div>
    )
}

export default Index
