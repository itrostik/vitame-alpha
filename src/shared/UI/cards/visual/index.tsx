import { ReactNode } from 'react'

import Image from 'next/image'

import styles from './styles.module.scss'

import IImage from '@/shared/interfaces/image'

interface Props {
    heading: string | ReactNode
    text: string | ReactNode
    isHeader?: boolean
    image: IImage
}

const Visual = ({ heading, text, image, isHeader = true }: Props) => {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                {isHeader && <h3 className={styles.heading}>{heading}</h3>}
                <p className={styles.text}>{text}</p>
            </div>
            <Image
                className={styles.image}
                src={`/images/${image.src}`}
                alt={image.alt}
                width={400}
                height={400}
            />
        </div>
    )
}

export default Visual
