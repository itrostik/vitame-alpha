import styles from '@/widgets/problem/UI/styles.module.scss'

import Cards from '@/shared/UI/cards'

import Section from '@/shared/UI/layouts/section'

const Advantages = () => {
    const cards = [
        {
            image: {
                id: 0,
                src: '',
                alt: 'Img'
            },
            heading: 'Витамины и микроэлементы высокого качества'
        },
        {
            image: {
                id: 0,
                src: '',
                alt: 'Img'
            },
            heading: 'Максимальная совместимость компонентов – они быстро и легко усваиваются'
        },
        {
            image: {
                id: 0,
                src: '',
                alt: 'Img'
            },
            heading: 'Индивидуальные дозировки, а не общие нормы'
        },
        {
            image: {
                id: 0,
                src: '',
                alt: 'Img'
            },
            heading: 'Консультации специалистов с четкой и понятной информацией'
        }
    ]

    return (
        <Section id='advantages' heading='Мы заботимся о том, чтобы вы чувствовали себя лучше'>
            <div className={styles.cards}>
                {cards.map((card, index) => {
                    return <Cards.Minimalistic key={index} {...card} />
                })}
            </div>
        </Section>
    )
}

export default Advantages
