import styles from './styles.module.scss'

import Section from '@/shared/UI/layouts/section'

const Approach = () => {
  const cards = [
    {
      id: 0,
      value: '1 270 000',
      text: 'Вариантов, из которых мы формируем ваш рецепт'
    },
    {
      id: 1,
      value: '1 000',
      text: 'Часов, которые мы потратили на разработку алгоритма'
    },
    {
      id: 2,
      value: '100',
      text: 'Исследований, которые мы учли при разработке формулы'
    }
  ]

  return (
    <Section
      id='approach'
      heading={
        <>
          Только научный подход <br /> и подтвержденные исследования
        </>
      }
    >
      <div className={styles.cards}>
        {cards.map((card, index) => {
          return (
            <div key={index} className={styles.card}>
              <h3 className={styles.value}>{card.value} +</h3>
              <p className={styles.text}>{card.text}</p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

export default Approach
