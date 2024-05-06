'use client'
import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { CSSProperties, useEffect, useRef, useState } from 'react'
const list: {
  title: string
  description: string
  link: { text: string; url: string } | null
  images: string[]
  top: string
  pos: number
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
    pos: 152
  },
  {
    title: 'Терминал',
    description:
      'Для авторизации приложите ваш бейдж или отсканируйте QR код из мобильного приложения.',
    link: null,
    dir: 'right',
    images: [],
    top: '2%',
    pos: 147
  },
  {
    title: 'Стаканчики',
    description:
      'Поставьте индивидуальный стаканчик в окно выдачи, чтобы получить свой набор витаминов и минералов.',
    link: null,
    dir: 'right',
    images: ['cup-1.jpg', 'cup-2.jpg'],
    top: '32%',
    pos: 156
  },
  {
    title: 'Таблетницы',
    description: 'Удобно брать витамины с собой.',
    link: null,
    dir: 'left',
    images: ['container-1.jpg', 'container-2.jpg'],
    top: '56%',
    pos: 152
  },
  {
    title: 'Контроллер',
    description:
      'Внутри аппарата встроен холодильник и устройство для поддержания оптимального уровня влажности. Все данные видны на экране – вы можете быть уверены, что условия хранения БАДов соблюдены.',
    link: null,
    dir: 'right',
    images: [],
    top: '68%',
    pos: 111
  }
]

const Vitamit = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [opacity, setOpacity] = useState(0)
  const [curScrollPosition, setCurScrollPosition] = useState(0)
  const getStyle = (index: number): CSSProperties => {
    let cur = opacity
    let i = index
    while (i > 0) {
      i--
      cur -= 100
      if (cur < 0) cur = 0
    }
    const b: CSSProperties = {
      top: `calc(${list[index].top} + ${cur > 100 ? 0 : 100 - cur}px)`,
      opacity: (cur / 100).toFixed(2)
    }
    if (list[index].dir === 'right') {
      b.left = `calc(50% + ${list[index].pos}px)`
    } else {
      b.right = `calc(50% + ${list[index].pos}px)`
    }
    return b
  }

  useEffect(() => {
    const callback = () => {
      setCurScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', callback)
  }, [])

  useEffect(() => {
    if (!sectionRef.current) return
    let cur = opacity
    const rect = sectionRef.current!.getBoundingClientRect()
    if (rect.top < 0 && rect.bottom > window.innerHeight) {
      const h = rect.height - window.innerHeight
      const real = Math.abs(rect.top)
      cur = Math.floor((500 * real) / h)
      setOpacity(cur)
    }
  }, [curScrollPosition])
  return (
    <section className={styles.section} ref={sectionRef}>
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
            <div key={i} className={styles.card} style={getStyle(i)}>
              <h3 className={styles.name}>{card.title}</h3>
              <div className={styles.text}>{card.description}</div>
              {card.link && (
                <Link href={card.link.url} className={styles.link}>
                  {card.link.text}
                </Link>
              )}
            </div>
          )
        })}
      </div>
      <div className={styles.empty}></div>
    </section>
  )
}

export default Vitamit
