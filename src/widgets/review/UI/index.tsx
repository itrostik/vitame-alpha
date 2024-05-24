'use client'
import styles from './styles.module.scss'
import Image from 'next/image'
import Arrow from './arrow'
import useEmblaCarousel from 'embla-carousel-react'
import { usePrevNextButtons } from '../utils/usePrevNextButtons'
import Slider from '@/widgets/slider/UI'

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

const Review = () => {
  return (
    <Slider heading={'Отзывы клиентов'}>
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
    </Slider>
  )
}
export default Review
