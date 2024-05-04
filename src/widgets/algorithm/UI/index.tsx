import Image from 'next/image'

import styles from './styles.module.scss'

import Section from '@/shared/UI/layouts/section'

import Cards from '@/shared/UI/cards'

const Algorithm = () => {
    const cards = [
        {
            heading: 'Расскажите о себе заполнив анкету',
            text: 'Всего несколько вопросов об образе жизни и ваших целях, чтобы мы дали персональные, а не общие рекомендации.',
            image: {
                id: 0,
                src: 'algo-3.jpg',
                alt: 'Img'
            }
        },
        {
            heading: (
                <>
                    Поднести QR код к <br /> аппарату
                </>
            ),
            text: 'Откройте приложение, поднесите код к аппарату, получите ваш индивидуальный набор витаминов. Все просто – ничего лишнего.',
            image: {
                id: 0,
                src: 'algo-1.jpg',
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
                src: 'algo-2.jpg',
                alt: 'Img'
            }
        }
    ]

    return (
        <Section id='algorithm' heading='Как это работает?'>
            <div className={styles.content}>
                <div className={styles.cards}>
                    {cards.map((card, index) => {
                        return <Cards.Visual key={index} {...card} />
                    })}
                </div>
                <div className={styles.bottom}>
                    <div className={styles.item}>
                        <h3 className={styles.heading}>
                            Как разместить <br className={styles.mobile} /> витамат у себя в офисе
                        </h3>
                        <button className={styles.button}>Узнать больше</button>
                    </div>
                    <Image
                        src='/images/auto.jpg'
                        alt='Поставить витамат'
                        width={500}
                        height={200}
                    />
                </div>
            </div>
        </Section>
    )
}

export default Algorithm
