import Image from 'next/image'

import styles from './styles.module.scss'

import Cards from '@/shared/UI/cards'

import Section from '@/shared/UI/layouts/section'

const Need = () => {
    const cards = [
        {
            id: 0,
            image: {
                id: 0,
                src: '/Img',
                alt: 'Img'
            },
            heading: (
                <>
                    Покупать разные банки <br /> с витаминами.
                </>
            )
        },
        {
            id: 1,
            image: {
                id: 0,
                src: '/Img',
                alt: 'Img'
            },
            heading: 'Носить с собой витамины и думать, чтобы не забыть их.'
        },
        {
            id: 2,
            image: {
                id: 0,
                src: '/Img',
                alt: 'Img'
            },
            heading: <>Раскладывать витамины по таблетницам.</>
        },
        {
            id: 3,
            image: {
                id: 0,
                src: '/Img',
                alt: 'Img'
            },
            heading: <>Думать о дозировках и совместимости компонентов.</>
        }
    ]

    return (
        <Section heading='Вам больше не нужно'>
            <div className={styles.wrapper}>
                <div className={styles.cards}>
                    {cards.map((card, index) => {
                        return <Cards.Minimalistic key={index} {...card} />
                    })}
                </div>
                <Image
                    className={styles.first}
                    src='/images/deco-1.png'
                    alt='deco 1'
                    width={100}
                    height={100}
                />
                <Image
                    className={styles.second}
                    src='/images/deco-2.png'
                    alt='deco 2'
                    width={200}
                    height={200}
                />
            </div>
        </Section>
    )
}

export default Need
