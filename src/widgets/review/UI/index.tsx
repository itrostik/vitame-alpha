'use client'
import styles from './styles.module.scss'
import Image from 'next/image'
import Arrow from './arrow'
import useEmblaCarousel from 'embla-carousel-react'
import { usePrevNextButtons } from '../utils/usePrevNextButtons'

const list: {
  image: string
  name: string
  company: string
  content: string
}[] = [
  {
    image: 'ivan.jpg',
    name: 'Иван Грозный',
    company: 'ООО Палаты Царские',
    content:
      'Спойлер – идеального времени не существует. Все зависит от комплекса и задачи – разбираемся в деталях и получаем максимальный результат от приема.'
  },
  {
    image: 'angelina.jpg',
    name: 'Анджелина Джоли',
    company: 'ООО Голливуд',
    content:
      'Спойлер – идеального времени не существует. Все зависит от комплекса и задачи – разбираемся в деталях и получаем максимальный результат от приема.'
  },
  {
    image: 'angelina.jpg',
    name: 'Анджелина Джоли',
    company: 'ООО Голливуд',
    content:
      'Спойлер – идеального времени не существует. Все зависит от комплекса и задачи – разбираемся в деталях и получаем максимальный результат от приема.'
  },
  {
    image: 'ivan.jpg',
    name: 'Иван Грозный',
    company: 'ООО Палаты Царские',
    content:
      'Спойлер – идеального времени не существует. Все зависит от комплекса и задачи – разбираемся в деталях и получаем максимальный результат от приема.'
  }
]

const Review = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi)
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <h2 className={styles.title}>Отзывы клиентов</h2>
            <div className={styles.arrow}>
              <button className={styles.btn} disabled={prevBtnDisabled} onClick={onPrevButtonClick}>
                <Arrow left />
              </button>
              <button className={styles.btn} disabled={nextBtnDisabled} onClick={onNextButtonClick}>
                <Arrow />
              </button>
            </div>
          </div>
          <div className={styles.viewport} ref={emblaRef}>
            <div className={styles.carousel}>
              {list.map((item, i) => {
                return (
                  <div key={i} className={styles.item}>
                    <Image
                      src={'/images/' + item.image}
                      alt='Person'
                      width={185}
                      height={185}
                      className={styles.image}
                    />
                    <div className={styles.right}>
                      <div className={styles.name}>{item.name}</div>
                      <div className={styles.company}>{item.company}</div>
                      <div className={styles.content}>{item.content}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Review
