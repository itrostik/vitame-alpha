'use client'
import { CardType } from '../../vitamit/utils/cardType'
import useEmblaCarousel from 'embla-carousel-react'
import AutoHeight from 'embla-carousel-auto-height'
import styles from '../../vitamit/UI/styles.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
interface Props {
  list: CardType[]
}
const MobileCard = ({ list }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    watchDrag: true,
    duration: 100,
    inViewThreshold: 1,
    align: 'start'
  })

  const containerRef = useRef<HTMLDivElement>(null)

  const [lastScrollPx, setLastScrollPx] = useState<number>(0)

  useEffect(() => {
    function wheelScroll() {
      if (lastScrollPx > window.scrollY) {
        emblaApi?.scrollPrev()
      } else if (lastScrollPx < window.scrollY) {
        emblaApi?.scrollNext()
      }
      setLastScrollPx(window.scrollY)
    }

    function handleScroll() {
      const container = containerRef.current
      if (!container) return

      const containerRect = container.getBoundingClientRect()
      const isFullyVisible = containerRect.top >= 0 && containerRect.bottom <= window.innerHeight

      if (isFullyVisible) {
        window.addEventListener('scroll', wheelScroll)
      } else {
        window.removeEventListener('scroll', wheelScroll)
      }
    }
    window.addEventListener('scroll', handleScroll)
  }, [lastScrollPx, emblaApi])

  return (
    <div className={styles.mobile} ref={containerRef}>
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
                    {card.images.map((image, i) => (
                      <Image
                        key={i}
                        src={'/images/' + image}
                        alt='image'
                        width={0}
                        height={0}
                        sizes='100vw'
                        className={styles.image}
                      />
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default MobileCard
