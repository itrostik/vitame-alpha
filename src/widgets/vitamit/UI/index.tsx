'use client'
import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { CSSProperties } from 'react'
import { motion } from 'framer-motion'

const list: {
  title: string
  description: string
  link: { text: string; url: string } | null
  images: string[]
  top: string
  pos: string
  dir: 'left' | 'right'
}[] = [
  {
    title: 'Тачскрин с каталогом',
    description:
      'Выбирайте нужные витамины и получайте их в один клик. На экране – четкое и понятное описание каждого продукта, срок годности, дата изготовления и номер партии.',
    link: { text: 'Перейти в каталог', url: '/products' },
    dir: 'left',
    images: [],
    top: '5%',
    pos: '0%'
  },
  {
    title: 'Терминал',
    description:
      'Для авторизации приложите ваш бейдж или отсканируйте QR код из мобильного приложения.',
    link: null,
    dir: 'right',
    images: [],
    top: '2%',
    pos: '0'
  },
  {
    title: 'Стаканчики',
    description:
      'Поставьте индивидуальный стаканчик в окно выдачи, чтобы получить свой набор витаминов и минералов.',
    link: null,
    dir: 'right',
    images: ['cup-1.jpg', 'cup-2.jpg'],
    top: '32%',
    pos: '1%'
  },
  {
    title: 'Таблетницы',
    description: 'Удобно брать витамины с собой.',
    link: null,
    dir: 'left',
    images: ['container-1.jpg', 'container-2.jpg'],
    top: '56%',
    pos: '0%'
  },
  {
    title: 'Контроллер',
    description:
      'Внутри аппарата встроен холодильник и устройство для поддержания оптимального уровня влажности. Все данные видны на экране – вы можете быть уверены, что условия хранения БАДов соблюдены.',
    link: null,
    dir: 'right',
    images: [],
    top: '68%',
    pos: '1%'
  }
]

const Vitamit = () => {
  const getStyle = (index: number): CSSProperties => {
    const b: CSSProperties = {
      top: list[index].top
    }
    if (list[index].dir === 'right') {
      b.right = list[index].pos
    } else {
      b.left = list[index].pos
    }
    return b
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Что есть в витамате</h2>
      <div className={styles.content}>
        <Image
          src='/images/vitamit-bg.png'
          alt='Vitamit Background'
          width={1114}
          height={757}
          className={styles.bg}
        />
        <Image
          src='/images/vitamit.png'
          alt='Vitamit'
          width={370}
          height={850}
          className={styles.vitamit}
        />
        <Image
          src='/images/vitamit-shadow.png'
          alt='Vitamit'
          width={1079}
          height={61}
          className={styles.shadow}
        />
        {list.map((card, i) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              key={i}
              className={styles.card}
              style={getStyle(i)}
            >
              <h3 className={styles.name}>{card.title}</h3>
              <div className={styles.text}>{card.description}</div>
              {card.link && (
                <Link href={card.link.url} className={styles.link}>
                  {card.link.text}
                </Link>
              )}
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Vitamit
