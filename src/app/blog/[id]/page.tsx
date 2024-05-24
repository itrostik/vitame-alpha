'use client'

import React from 'react'
import styles from '@/shared/styles/pages/article.module.scss'
import Header from '@/shared/UI/header'
import Navigation from '@/widgets/navigation/UI'
import Modal from '@/widgets/modal/UI/modal'
import Form from '@/widgets/form/UI'
import Notification from '@/widgets/notification/UI'
import Cookie from '@/widgets/cookie/UI'
import Footer from '@/shared/UI/footer'
import useFormStore from '@/widgets/form/model/store'
import useNotificationStore from '@/widgets/notification/model/store'
import Container from '@/shared/UI/layouts/container'
import articles from '@/shared/articles'
import Chevron from '@/shared/UI/icons/chevron'
import Share from '@/shared/UI/icons/share'
import Calendar from '@/shared/UI/icons/calendar'
import Clock from '@/shared/UI/icons/clock'
import Dot from '@/shared/UI/icons/dot'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Article = ({ params }: { params: { id: string } }) => {
  const { isFormHidden, setIsFormHidden } = useFormStore()
  const { isNotificationHidden, setIsNotificationHidden } = useNotificationStore()

  const article = articles.find((article) => article.id === Number(params.id))

  let nextArticles = articles.filter((article) => article.id > Number(params.id)).slice(0, 3)

  if (nextArticles.length === 0) {
    nextArticles = articles.slice(0, 3)
  }

  const router = useRouter()

  if (!article) {
    return
  }

  return (
    <div className={styles.wrapper}>
      <Navigation />
      <Modal isHidden={isFormHidden} setIsHidden={setIsFormHidden}>
        <Form />
      </Modal>
      <Modal isHidden={isNotificationHidden} setIsHidden={setIsNotificationHidden}>
        <Notification />
      </Modal>
      <Cookie />
      <main className={styles.main}>
        <Header />
        <Container>
          <div className={styles.buttons}>
            <button className={styles.backButton} onClick={() => router.push('/blog')}>
              <Chevron />
              <span>Назад к статьям</span>
            </button>
            <div className={styles.mobile}>
              <button className={styles.shareButton}>
                <span>Поделиться</span>
                <Share />
              </button>
            </div>
          </div>
          <div className={styles.part}>
            <div className={styles.content}>
              <div className={styles.info}>
                <div className={styles.block}>
                  <Calendar />
                  <span>{article.date}</span>
                </div>
                <Dot />
                <div className={styles.block}>
                  <Clock />
                  <span>{article.time}</span>
                </div>
              </div>
              <h1 className={styles.articleHeading}>{article.name}</h1>
              {article.content.map((item) => {
                if (item.children) {
                  const Tag = item.tag as keyof JSX.IntrinsicElements

                  return <Tag>{item.children}</Tag>
                }

                if (item.src) {
                  return <img src={item.src} alt='' />
                }

                if (item.items) {
                  const Tag = item.tag as keyof JSX.IntrinsicElements

                  return (
                    <Tag>
                      {item.items.map((listItem) => {
                        return <li>{listItem}</li>
                      })}
                    </Tag>
                  )
                }
              })}
            </div>
            <div className={styles.alpha}>
              <div className={styles.desktop}>
                <button className={styles.shareButton}>
                  <span>Поделиться</span>
                  <Share />
                </button>
              </div>
              <div className={styles.extra}>
                <h3 className={styles.heading}>Другие статьи</h3>
                <div className={styles.articles}>
                  {nextArticles.map((article) => {
                    return (
                      <Link
                        href={`/blog/${article.id}`}
                        className={styles.articleCard}
                        key={article.id}
                      >
                        <span className={styles.date}>{article.date}</span>
                        <h3 className={styles.name}>{article.name}</h3>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default Article
