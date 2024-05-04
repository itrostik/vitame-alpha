import styles from './styles.module.scss'

import Section from '@/shared/UI/layouts/section'

import Cards from '@/shared/UI/cards'

const Quality = () => {
    const cards = [
        {
            id: 0,
            heading: (
                <>
                    Без траты времени <br /> и энергии
                </>
            ),
            image: {
                id: 0,
                src: 'quality-1.jpg',
                alt: 'Img'
            },
            text: (
                <>
                    Не нужно думать, какие витамины принимать и когда – обо всем <br /> позаботилась
                    команда VITA<strong>ME</strong>.
                </>
            )
        },
        {
            id: 1,
            heading: (
                <>
                    Высокая продуктивность <br /> и эффективность
                </>
            ),
            text: 'Уровень стресса – ниже, уровень энергии – выше. Витамины и микроэлементы всегда будут в балансе.',
            image: {
                id: 0,
                src: 'quality-2.jpg',
                alt: 'Img'
            }
        },
        {
            id: 2,
            heading: (
                <>
                    Общее самочувствие <br /> улучшится быстро
                </>
            ),
            text: 'Уже через несколько недель вы увидите первые результаты – например, начнете легче просыпаться и проще засыпать, появится больше энергии.',
            image: {
                id: 0,
                src: 'quality-3.jpg',
                alt: 'Img'
            }
        }
    ]

    return (
        <Section id='quality' heading='Качество жизни улучшится быстро'>
            <div className={styles.cards}>
                {cards.map((card, index) => {
                    return <Cards.Visual key={index} {...card} />
                })}
            </div>
        </Section>
    )
}

export default Quality
