'use client'

import styles from './styles.module.scss'
import cn from 'classnames'
import { useRouter } from 'next/navigation'

const Items = ({ page }: { page: 'home' | 'products' | 'identity' | 'b2b' }) => {
  const router = useRouter()

  return (
    <div className={styles.items}>
      {page === 'home' && (
        <>
          <div className={styles.content}>
            <h1 className={styles.heading}>Индивидуальный комплекс витаминов</h1>
            <h2 className={styles.subheading}>биохакинг без сложностей</h2>
          </div>
          <button className={styles.button} onClick={() => router.push('/products')}>
            Посмотреть все продукты
          </button>
        </>
      )}
      {page === 'products' && (
        <>
          <h1 className={cn(styles.heading, styles.big)}>
            Каталог <br /> продуктов
          </h1>
        </>
      )}
      {page === 'b2b' && (
        <div className={styles.content}>
          <div className={styles.container}>
            <h1 className={styles.heading}>индивидуальный набор витаминов всегда под рукой</h1>
          </div>
          <p className={styles.text}>
            Витамат – это наша уникальная разработка, которая родилась из идеи создать удобный
            витаминный бар. Простое и понятное решение для хорошего самочувствия прямо на рабочем
            месте.
          </p>
        </div>
      )}
    </div>
  )
}

export default Items
