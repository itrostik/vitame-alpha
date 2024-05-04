import Image from 'next/image'

import styles from './styles.module.scss'

import Section from '@/shared/UI/layouts/section'

import Cards from '@/shared/UI/cards'

const Algorithm = () => {
    const cards = [
        {
            heading: 'Расскажите о себе заполнив анкету',
            text: 'Быстрый доступ к витаминам в нужных дозировках',
            image: {
                id: 0,
                src: 'why-1.jpg',
                alt: 'Img'
            }
        },
        {
            heading: (
                <>
                    Поднести QR код к <br /> аппарату
                </>
            ),
            text: 'Запись на чекапы в приложении',
            image: {
                id: 0,
                src: 'why-2.jpg',
                alt: 'Img'
            }
        },
        {
            heading: 'Чекапы и консультации в мобильном приложении',
            text: (
                <>
                    Загрузите в приложение результаты анализа крови на уровень витаминов, и алгоритм
                    VITA<strong>ME</strong> учтет их при формировании рекомендаций.
                </>
            ),
            image: {
                id: 0,
                src: 'why-3.jpg',
                alt: 'Img'
            }
        }
    ]

    return (
        <Section id='algorithm' heading='Почему витамат'>
            <div className={styles.content}>
                <div className={styles.cards}>
                    {cards.map((card, index) => {
                        return <Cards.Visual key={index} isHeader={false} {...card} />
                    })}
                </div>
            </div>
        </Section>
    )
}

export default Algorithm
