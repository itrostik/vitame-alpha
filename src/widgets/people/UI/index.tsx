'use client'
import Image from 'next/image'

import styles from './styles.module.scss'

import Section from '@/shared/UI/layouts/section'
import Arrow from '@/widgets/slider/UI/arrow'
import useEmblaCarousel from 'embla-carousel-react'
import { usePrevNextButtons } from '@/widgets/review/utils/usePrevNextButtons'

const people = [
  {
    id: 0,
    image: {
      src: '/images/person-1.jpg',
      alt: 'Гинзбург Михаил Моисеевич'
    },
    name: (
      <>
        Гинзбург <br /> Михаил Моисеевич
      </>
    ),
    paragraphs: [
      'Руководитель самарского НИИ диетологии и диетотерапии.',
      'Д. м. н., врач-диетолог, психотерапевт.',
      'Дополнительные специализации: эндокринология, диетология, психиатрия и психотерапия.'
    ]
  },
  {
    id: 1,
    image: {
      src: '/images/person-2.jpg',
      alt: 'Терещенко Ирина Петровна'
    },
    name: (
      <>
        Терещенко <br /> Ирина Петровна
      </>
    ),
    paragraphs: [
      'Разработчик экосистем генетического тестирования.',
      'К. м. н., консультант направления прецизионной медицины.',
      'Медицинский аналитик, врач клинической лабораторной диагностики, врач-педиатр.'
    ]
  },
  {
    id: 2,
    image: {
      src: '/images/person-3.jpg',
      alt: 'Хусаинова Галина Михайловна'
    },
    name: (
      <>
        Хусаинова <br /> Галина Михайловна
      </>
    ),
    paragraphs: [
      'Профессиональный инструктор по биохакингу.',
      'Разработчик персональных программ по генетике, микробиоте, нутрициологии. Основатель Free Age Academy. Автор книги «Биохакинг по-женски», коуч и бизнес-тренер ICF.'
    ]
  },
  {
    id: 3,
    image: {
      src: '/images/person-4.jpg',
      alt: 'Баян Ольга Сергеевна'
    },
    name: (
      <>
        Баян <br /> Ольга Сергеевна
      </>
    ),
    paragraphs: [
      'Специалист по коррекции веса и психологии пищевого поведения',
      'Wellness-коуч, спикер академии специалистов индустрии здоровья',
      'Дополнительные специализации: эндокринология, диетология, психиатрия и психотерапия'
    ]
  },
  {
    id: 4,
    image: {
      src: '/images/person-6.jpg',
      alt: 'Мойсенко Римма Васильевна'
    },
    name: (
      <>
        Мойсенко <br /> Римма Васильевна
      </>
    ),
    paragraphs: [
      'Диетолог, терапевт, специалист по коррекции фигуры',
      'К.м.н., врач интегративной превентивной медицины',
      'Основатель клиники «Риммарита». Автор книг «Моя программа стройности», «Обмани свой вес»'
    ]
  }
]
const People = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    startIndex: 0,
    slidesToScroll: 2,
    align: 'start'
  })
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi)
  return (
    <>
      <div className={styles.mobile}>
        <Section
          heading={
            <>
              Высокая экспертиза – <br /> высокие стандарты качества
            </>
          }
        >
          <div className={styles.cards}>
            {people.map((card, index) => {
              const { src, alt } = card.image

              return (
                <div key={index} className={styles.card}>
                  <Image className={styles.image} src={src} alt={alt} height={285} width={270} />
                  <div className={styles.content}>
                    <h3 className={styles.heading}>{card.name}</h3>
                    <div className={styles.description}>
                      {card.paragraphs.map((paragraph, index) => {
                        return (
                          <p key={index} className={styles.text}>
                            {paragraph}
                          </p>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Section>
      </div>
      <div className={styles.desktop}>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <div className={styles.top}>
                <h2 className={styles.title}>
                  Высокая экспертиза – <br /> высокие стандарты качества
                </h2>
                <div className={styles.arrow}>
                  <button
                    className={styles.btn}
                    disabled={prevBtnDisabled}
                    onClick={onPrevButtonClick}
                  >
                    <Arrow left />
                  </button>
                  <button
                    className={styles.btn}
                    disabled={nextBtnDisabled}
                    onClick={onNextButtonClick}
                  >
                    <Arrow />
                  </button>
                </div>
              </div>
              <div className={styles.viewport} ref={emblaRef}>
                <div className={styles.carousel}>
                  {people.map((card) => {
                    return (
                      <div key={card.id} className={styles.card}>
                        <Image
                          className={styles.image}
                          src={card.image.src}
                          alt={card.image.alt}
                          height={285}
                          width={270}
                        />
                        <div className={styles.content}>
                          <h3 className={styles.heading}>{card.name}</h3>
                          <div className={styles.description}>
                            {card.paragraphs.map((paragraph, index) => {
                              return (
                                <p key={index} className={styles.text}>
                                  {paragraph}
                                </p>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default People
