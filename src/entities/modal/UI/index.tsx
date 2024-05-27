'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'

import cn from 'classnames'

import styles from './styles.module.scss'

import IImage from '@/shared/interfaces/image'

import { IProduct, Type } from '@/entities/product/model/store'
import Chevron from '@/shared/UI/icons/chevron'
import { useRouter } from 'next/navigation'
import Plus from '@/shared/UI/icons/plus'
import Minus from '@/shared/UI/icons/minus'
import { motion } from 'framer-motion'
import Container from '@/shared/UI/layouts/container'

const ModalProduct = ({ product }: { product: IProduct }) => {
  const [isLoading, setIsLoading] = useState(true)

  const router = useRouter()

  const tabs = [
    {
      title: 'Описание',
      state: 'description'
    },
    {
      title: 'Состав',
      state: 'structure'
    },
    {
      title: 'Рекомендации по применению',
      state: 'recommendations'
    },
    {
      title: 'Противопоказания',
      state: 'contra'
    }
  ]

  const tabsMobile = [
    {
      title: 'Описание',
      state: 'description',
      info: product.description
    },
    {
      title: 'Состав',
      state: 'structure',
      info: product.structure
    },
    {
      title: 'Рекомендации по применению',
      state: 'recommendations',
      info: product.recommendations
    },
    {
      title: 'Противопоказания',
      state: 'contra',
      info: product.contra
    }
  ]

  const transition = {
    type: 'spring',
    stiffness: 700,
    damping: 40
  }

  const [preview, setPreview] = useState<IImage>()
  const [type, setType] = useState<Type>()

  const handleClick = (i: number) => {
    setIsHidden((prevState) => {
      return [...prevState].map((item, index) => (index === i ? !prevState[index] : true))
    })
  }

  const [isHidden, setIsHidden] = useState<Boolean[]>(tabsMobile.map((_, index) => index !== 0))

  const variants = {
    opened: { opacity: 1, height: 'auto' },
    closed: { opacity: 0, height: 0 }
  }

  const handleTabClick = (tab: Type) => {
    setType(tab)
  }

  useEffect(() => {
    if (product) {
      setType('description')
      setPreview(product.images[0])
    }
  }, [product])

  if (!product || !preview) {
    return null
  }

  return (
    <>
      <div className={styles.shell}>
        <div className={styles.modal}>
          <div className={styles.info}>
            <div className={styles.images}>
              {product.images.length > 1 && (
                <div className={styles.mini}>
                  {product.images.map((image, index) => (
                    <Image
                      key={index}
                      src={`/images/${image.src}`}
                      alt={image.alt}
                      width={85}
                      height={85}
                      onClick={() => setPreview(image)}
                    />
                  ))}
                </div>
              )}
              <div className={styles.column}>
                <Image
                  className={styles.image}
                  src={`/images/${preview.src}`}
                  alt={preview.alt}
                  width={415}
                  height={415}
                  loading='eager'
                  onLoadingComplete={() => setIsLoading(false)}
                />
                <button
                  className={cn(styles.backButton, styles.desktop)}
                  onClick={() => router.push('/products')}
                >
                  <Chevron />
                  <span>Назад в каталог</span>
                </button>
              </div>
            </div>
            <div className={styles.wrapper}>
              <h2 className={styles.title}>{product.name}</h2>
              <div className={styles.items}>
                <div className={styles.tape}>
                  <div className={styles.tabs}>
                    {tabs.map((tab, index) => {
                      return (
                        <button
                          key={index}
                          className={cn(styles.tab, {
                            [styles.selected]: type === tab.state
                          })}
                          onClick={() => handleTabClick(tab.state as Type)}
                        >
                          {tab.title}
                        </button>
                      )
                    })}
                  </div>
                </div>
                <div className={styles.description}>
                  {type && <p className={styles.text}>{product[type]}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.shellMobile}>
        <button
          className={cn(styles.backButton, styles.mobile)}
          onClick={() => router.push('/products')}
        >
          <Chevron />
          <span>Назад в каталог</span>
        </button>
        <div className={styles.images}>
          <div className={styles.column}>
            <Image
              className={styles.image}
              src={`/images/${preview.src}`}
              alt={preview.alt}
              width={415}
              height={415}
              loading='eager'
              onLoadingComplete={() => setIsLoading(false)}
            />
            {product.images.length > 1 && (
              <div className={styles.miniMobile}>
                {product.images.map((image, index) => (
                  <Image
                    key={index}
                    src={`/images/${image.src}`}
                    alt={image.alt}
                    width={85}
                    height={85}
                    onClick={() => setPreview(image)}
                  />
                ))}
              </div>
            )}
            <h2 className={styles.title}>{product.name}</h2>
            <div className={styles.questions}>
              {tabsMobile.map((item, index) => (
                <div key={item.title} className={styles.item52}>
                  <div className={styles.top52} onClick={() => handleClick(index)}>
                    <h3 className={styles.question52}>{item.title}</h3>
                    <button className={styles.button52}>
                      {isHidden[index] ? <Plus /> : <Minus />}
                    </button>
                  </div>
                  <motion.div
                    className={cn(styles.answer52, { [styles.opened52]: !isHidden[index] })}
                    initial={false}
                    animate={isHidden[index] ? 'closed' : 'opened'}
                    variants={variants}
                    transition={transition}
                  >
                    {item.info}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalProduct
