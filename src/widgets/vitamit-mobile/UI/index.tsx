import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
const list: {
  title: string
  description: string
  link: { text: string; url: string } | null
  images: string[]
}[] = [
  {
    title: 'Тачскрин с каталогом',
    description:
      'Выбирайте нужные витамины и получайте их в один клик. На экране – четкое и понятное описание каждого продукта, срок годности, дата изготовления и номер партии.',
    link: { text: 'Перейти в каталог', url: '/products' },
    images: []
  },
  {
    title: 'Терминал',
    description:
      'Для авторизации приложите ваш бейдж или отсканируйте QR код из мобильного приложения.',
    link: null,
    images: []
  },
  {
    title: 'Стаканчики',
    description:
      'Поставьте индивидуальный стаканчик в окно выдачи, чтобы получить свой набор витаминов и минералов.',
    link: null,
    images: ['cup-1.jpg', 'cup-2.jpg']
  },
  {
    title: 'Таблетницы',
    description: 'Удобно брать витамины с собой.',
    link: null,
    images: ['container-1.jpg', 'container-2.jpg']
  },
  {
    title: 'Контроллер',
    description:
      'Внутри аппарата встроен холодильник и устройство для поддержания оптимального уровня влажности. Все данные видны на экране – вы можете быть уверены, что условия хранения БАДов соблюдены.',
    link: null,
    images: []
  }
]

const VitamitMobile = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    startIndex: 0
  })
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Что есть в витамате</h2>
      <div className={styles.content}>
        <div className={styles.hidden}>
          <Image
            src='/images/vitamit-bg.png'
            alt='Vitamit Background'
            width={1114}
            height={757}
            className={styles.bg}
          />
          <Image
            src='/images/vitamit.jpg'
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
        </div>

        <div className={styles.viewport} ref={emblaRef}>
          <div className={styles.carousel}>
            {list.map((card, i) => {
              return (
                <div key={i} className={styles.card}>
                  <h3 className={styles.name}>{card.title}</h3>
                  <div className={styles.text}>{card.description}</div>
                  {card.link && (
                    <Link href={card.link.url} className={styles.link}>
                      {card.link.text}
                    </Link>
                  )}
                  {card.images.length > 0 && (
                    <div className={styles.images}>
                      {card.images.map((e) => {
                        return (
                          <Image
                            key={e}
                            src={'/images/' + e}
                            alt='image'
                            width={0}
                            height={0}
                            sizes='100vw'
                            className={styles.image}
                          />
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VitamitMobile
