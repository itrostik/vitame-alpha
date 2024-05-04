import styles from './styles.module.scss'
import Image from 'next/image'
import MobileCard from './mobile-card'

import { CardType } from '../utils/cardType'

const cardList: CardType[] = [
  {
    title: 'Тачскрин с каталогом',
    description:
      'Выбирайте нужные витамины и получайте их в один клик. На экране – четкое и понятное описание каждого продукта, срок годности, дата изготовления и номер партии.',
    link: { text: 'Перейти в каталог', url: '/products' },
    positionOnDesktop: 'left',
    images: [],
    topOnDesktop: 68,
    paddingOnDesktop: 165
  },
  {
    title: 'Терминал',
    description:
      'Для авторизации приложите ваш бейдж или отсканируйте QR код из мобильного приложения.',
    link: null,
    positionOnDesktop: 'right',
    images: [],
    topOnDesktop: 37,
    paddingOnDesktop: 147
  },
  {
    title: 'Стаканчики',
    description:
      'Поставьте индивидуальный стаканчик в окно выдачи, чтобы получить свой набор витаминов и минералов.',
    link: null,
    positionOnDesktop: 'right',
    images: ['cup-1.jpg', 'cup-2.jpg'],
    topOnDesktop: 358,
    paddingOnDesktop: 156
  },
  {
    title: 'Таблетницы',
    description: 'Удобно брать витамины с собой.',
    link: null,
    positionOnDesktop: 'left',
    images: ['container-1.jpg', 'container-2.jpg'],
    topOnDesktop: 567,
    paddingOnDesktop: 165
  },
  {
    title: 'Контроллер',
    description:
      'Внутри аппарата встроен холодильник и устройство для поддержания оптимального уровня влажности. Все данные видны на экране – вы можете быть уверены, что условия хранения БАДов соблюдены.',
    link: null,
    positionOnDesktop: 'right',
    images: [],
    topOnDesktop: 662,
    paddingOnDesktop: 111
  }
]

const VitamitMobile = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
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
          <MobileCard list={cardList} />
        </div>
      </div>
    </section>
  )
}

export default VitamitMobile
