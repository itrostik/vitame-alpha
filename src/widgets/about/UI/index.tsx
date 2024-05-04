import React from 'react'
import styles from './styles.module.scss'

const list: string[] = [
  'Покупать разные банки с витаминами.',
  'Носить с собой витамины и думать, чтобы не забыть их.',
  'Раскладывать витамины по таблетницам.',
  'Думать о дозировках и совместимости компонентов.'
]

const About = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>ВАМ БОЛЬШЕ НЕ НУЖНО</h3>
      <div className={styles.content}>
        {list.map((item) => (
          <div className={styles.block} key={item}>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
