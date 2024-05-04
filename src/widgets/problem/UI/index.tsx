import Image from 'next/image'

import styles from './styles.module.scss'

import Cards from '@/shared/UI/cards'

import Section from '@/shared/UI/layouts/section'

const Problem = () => {
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
                    Без сложных инструкций <br /> и долгих расшифровок
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
            heading: 'Оптимальные дозировки по индивидуальным показателям'
        },
        {
            id: 2,
            image: {
                id: 0,
                src: '/Img',
                alt: 'Img'
            },
            heading: (
                <>
                    Нужные витамины <br /> – в одно нажатие
                </>
            )
        },
        {
            id: 3,
            image: {
                id: 0,
                src: '/Img',
                alt: 'Img'
            },
            heading: (
                <>
                    Нет рисков забыть комплекс <br /> – он всегда рядом с вами
                </>
            )
        }
    ]

    return (
        <Section heading='Все хотят пить витамины, но не знают какие'>
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

export default Problem
