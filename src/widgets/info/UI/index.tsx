'use client'
import styles from './styles.module.scss'
import Image from 'next/image'
import useFormStore from '@/widgets/form/model/store'
interface Props {
  variantWithButton?: boolean
}
const Info = ({ variantWithButton = false }: Props) => {
  const { setIsFormHidden } = useFormStore()
  if (variantWithButton) {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.left}>
              <h2 className={styles.title}>Готовое решение для здоровья ваших сотрудников</h2>
              <div className={styles.content}>
                Корпоративный wellbeing – это просто, достаточно скачать приложение VITA
                <span>ME</span> и заполнить анкету. Продуктивность команды будет выше, а результаты
                – лучше.
              </div>
              <button className={styles.button} onClick={() => setIsFormHidden(false)}>
                Поставить витамат в своем офисе
              </button>
            </div>
            <Image
              className={styles.image}
              src='/images/vitamit-in-office.png'
              alt='Vitamit in office'
              width={494}
              height={325}
            />
          </div>
        </div>
      </section>
    )
  }
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h2 className={styles.title}>Качество и безопасность – наш приоритет</h2>
            <div className={styles.content}>
              Витамат сделан из безопасных материалов – мы используем только медицинские пластик и
              сталь. Внутри поддерживаем оптимальные температуру и влажность для хранения БАДов –
              показатели видны на датчике и индикаторе на фронтальной панели.
              <br />
              <br />В каждом наборе указаны сроки годности и номер партии, мы заботимся о вашем
              здоровье и поддерживаем высокое качество продукции.
            </div>
          </div>
          <Image
            className={styles.image}
            src='/images/vitamin-in-hands.png'
            alt='Vitamit in office'
            width={494}
            height={325}
          />
        </div>
      </div>
    </section>
  )
}

export default Info
