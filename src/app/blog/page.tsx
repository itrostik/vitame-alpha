'use client'

import React from 'react'

import styles from '@/shared/styles/pages/blog.module.scss'

import Image from 'next/image'

import Wrapper from '@/shared/UI/layouts/wrapper'
import Header from '@/shared/UI/header'
import Navigation from '@/widgets/navigation/UI'
import Modal from '@/widgets/modal/UI/modal'
import Form from '@/widgets/form/UI'
import Notification from '@/widgets/notification/UI'
import Cookie from '@/widgets/cookie/UI'
import useFormStore from '@/widgets/form/model/store'
import useNotificationStore from '@/widgets/notification/model/store'
import BlogIntro from '@/widgets/blog-intro/UI'
import Container from '@/shared/UI/layouts/container'
import Calendar from '@/shared/UI/icons/calendar'
import Clock from '@/shared/UI/icons/clock'
import Link from 'next/link'
import articles from '@/shared/articles'
import Dot from '@/shared/UI/icons/dot'
import Footer from '@/shared/UI/footer'
import { useRouter } from 'next/navigation'

const Page = () => {
  const { isFormHidden, setIsFormHidden } = useFormStore()
  const { isNotificationHidden, setIsNotificationHidden } = useNotificationStore()

  const router = useRouter()

  // @ts-ignore
  return (
    <div>
      <Header />
      <Navigation />
      <Modal isHidden={isFormHidden} setIsHidden={setIsFormHidden}>
        <Form />
      </Modal>
      <Modal isHidden={isNotificationHidden} setIsHidden={setIsNotificationHidden}>
        <Notification />
      </Modal>
      <Cookie />
      <BlogIntro />
      <main className={styles.main}>
        <Container>
          <div className={styles.desktop}>
            <h1 className={styles.heading}>Все статьи</h1>
          </div>
          <div className={styles.mobile}>
            <h1 className={styles.heading}>Блог</h1>
          </div>
          <div className={styles.cards}>
            {articles.map((article) => {
              const preview = article.content.find((item) => item.src)
              const description = article.content.find((item) => item.tag === 'p')

              if (!description) {
                return
              }

              return (
                <div
                  key={article.id}
                  className={styles.article}
                  onClick={() => router.push(`/blog/${article.id}`)}
                >
                  {preview && <img src={preview.src} alt='' width={380} height={310} />}
                  <div className={styles.content}>
                    <h3 className={styles.name}>{article.name}</h3>
                    <p className={styles.description}>{description.children}</p>
                    <div className={styles.bottom}>
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
                  </div>
                  <Link className={styles.link} href={`/blog/${article.id}`}>
                    Подробнее
                  </Link>
                </div>
              )
            })}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default Page
