// @ts-nocheck

import Image from 'next/image'
import styles from './styles.module.scss'
import useProductStore, { IProduct } from '@/entities/product/model/store'
import { useEffect, useRef, useState } from 'react'
import { addScrollPrevention, removeScrollPrevention } from '@/shared/scroll'
import { useRouter } from 'next/navigation'
import useEmblaCarousel from 'embla-carousel-react'
import cn from 'classnames'

interface Props {
    product: IProduct
}

const Product = ({ product }: Props) => {
    const { src, alt } = product.images[0]
    const router = useRouter()
    const isHidden = useProductStore((state) => state.isHidden)
    const [productWidth, setProductWidth] = useState(0)
    const productRef = useRef<HTMLDivElement>(null)

    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'center' })

    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
    const [autoplay, setAutoplay] = useState<NodeJS.Timeout | null>(null)

    const handleClick = () => {
        router.push(`/products/${product.id}`)
    }

    const handleSliderClick = (e) => {
        e.stopPropagation()
    }

    const startAutoplay = () => {
        if (emblaApi && !autoplay) {
            if (emblaApi.canScrollNext()) {
                emblaApi.scrollNext()
            } else {
                emblaApi.scrollTo(0)
            }

            const play = setInterval(() => {
                if (emblaApi.canScrollNext()) {
                    emblaApi.scrollNext()
                } else {
                    emblaApi.scrollTo(0)
                }
            }, 10000)

            setAutoplay(play)
        }
    }

    const stopAutoplay = () => {
        if (autoplay) {
            clearInterval(autoplay)
            setAutoplay(null)
        }
    }

    useEffect(() => {
        console.log(isHidden)
        // if (isHidden) {
        //     removeScrollPrevention()
        // } else {
        //     addScrollPrevention()
        // }
    }, [isHidden])

    useEffect(() => {
        if (emblaApi) {
            const updateScrollSnaps = () => {
                setScrollSnaps(emblaApi.scrollSnapList())
            }

            const onSelect = () => {
                setSelectedIndex(emblaApi.selectedScrollSnap())
            }

            updateScrollSnaps()

            emblaApi.on('select', onSelect)

            onSelect()

            return () => {
                emblaApi.off('select', onSelect)
            }
        }
    }, [emblaApi])

    const dots = product.images.map((_, index) => (
        <div
            key={index}
            className={styles['dot-wrapper']}
            onClick={() => {
                if (emblaApi) {
                    emblaApi.scrollTo(index)
                }
            }}
        >
            <button
                key={index}
                className={cn(styles.dot, { [styles.isActive]: index === selectedIndex })}
                aria-label={`Go to slide ${index + 1}`}
            ></button>
        </div>
    ))

    return (
        <div
            className={styles.product}
            ref={productRef}
            onClick={handleClick}
            onMouseEnter={startAutoplay}
            onMouseLeave={stopAutoplay}
        >
            {product.images.length > 1 ? (
                <div className={styles.viewport} ref={emblaRef} onClick={handleSliderClick}>
                    <div className={styles.tape}>
                        {product.images.map((image, index) => (
                            <div className={styles.container} key={index}>
                                <Image
                                    className={styles.preview}
                                    src={`/images/${image.src}`}
                                    alt={alt}
                                    layout='responsive'
                                    width={productWidth}
                                    height={productWidth}
                                />
                            </div>
                        ))}
                    </div>
                    <div className={styles.dots}>{dots}</div>
                </div>
            ) : (
                <Image
                    className={styles.preview}
                    src={`/images/${src}`}
                    alt={alt}
                    layout='responsive'
                    width={productWidth}
                    height={productWidth}
                />
            )}
            <div className={styles.content}>
                <div className={styles.description}>
                    <h3 className={styles.title}>{product.name}</h3>
                    <p className={styles.brief}>{product.brief}</p>
                </div>
                <button className={styles.button}>Подробнее</button>
            </div>
        </div>
    )
}

export default Product
