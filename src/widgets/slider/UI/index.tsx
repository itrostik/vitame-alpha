'use client'
import styles from './styles.module.scss'
import Image from 'next/image'
import Arrow from './arrow'
import useEmblaCarousel from 'embla-carousel-react'
import { usePrevNextButtons } from '../utils/usePrevNextButtons'
import { ReactNode } from 'react'

const list: {
  image: string
  name: string
  company: string
  content: string
}[] = [
  {
    image: 'ivan.png',
    name: 'Иван Грозный',
    company: 'ООО Палаты Царские',
    content:
      'Спойлер – идеального времени не существует. Все зависит от комплекса и задачи – разбираемся в деталях и получаем максимальный результат от приема.'
  },
  {
    image: 'angelina.png',
    name: 'Анджелина Джоли',
    company: 'ООО Голливуд',
    content:
      'Спойлер – идеального времени не существует. Все зависит от комплекса и задачи – разбираемся в деталях и получаем максимальный результат от приема.'
  },
  {
    image: 'angelina.png',
    name: 'Анджелина Джоли',
    company: 'ООО Голливуд',
    content:
      'Спойлер – идеального времени не существует. Все зависит от комплекса и задачи – разбираемся в деталях и получаем максимальный результат от приема.'
  },
  {
    image: 'ivan.png',
    name: 'Иван Грозный',
    company: 'ООО Палаты Царские',
    content:
      'Спойлер – идеального времени не существует. Все зависит от комплекса и задачи – разбираемся в деталях и получаем максимальный результат от приема.'
  }
]

const Slider = ({ heading, children }: { heading: any; children: ReactNode }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi)

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <h2 className={styles.title}>{heading}</h2>
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
            <div className={styles.carousel}>{children}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Slider
