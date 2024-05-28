'use client'
import Info from '@/widgets/info/UI'
import Review from '@/widgets/review/UI'
import About from '@/widgets/about/UI'
import Program from '@/widgets/program/UI'
import styles from '@/shared/styles/pages/partnership.module.scss'
import Items from '@/widgets/intro/UI/items'
import Vitamit from '@/widgets/vitamit/UI'
import VitamitMobile from '@/widgets/vitamit-mobile/UI'
import Header from '@/shared/UI/header'
import React from 'react'
import Navigation from '@/widgets/navigation/UI'
import Modal from '@/widgets/modal/UI/modal'
import Form from '@/widgets/form/UI'
import Notification from '@/widgets/notification/UI'
import useFormStore from '@/widgets/form/model/store'
import useNotificationStore from '@/widgets/notification/model/store'
import Cookie from '@/widgets/cookie/UI'
import Intro from '@/widgets/intro/UI'
import Footer from '@/shared/UI/footer'
import News from '@/widgets/news/UI'

const Partnership = () => {
  const { isFormHidden, setIsFormHidden } = useFormStore()
  const { isNotificationHidden, setIsNotificationHidden } = useNotificationStore()
  return (
    <div className={styles.wrapper}>
      {isFormHidden && <Header />}
      <Navigation />
      <Modal isHidden={isFormHidden} setIsHidden={setIsFormHidden}>
        <Form />
      </Modal>
      <Modal isHidden={isNotificationHidden} setIsHidden={setIsNotificationHidden}>
        <Notification />
      </Modal>
      <Cookie />
      <Intro page='partnership' />
      <main className={styles.main}>
        <div className={styles.mobile}>
          <Items page='partnership' />
        </div>
        <About />
        <Info variantWithButton />
        <Program />
        <Vitamit />
        <VitamitMobile />
        <Info />
        {/*<Review />*/}
        <News />
      </main>
      <Footer />
    </div>
  )
}

export default Partnership
