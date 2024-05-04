import Wrapper from '@/shared/UI/layouts/wrapper'
import Info from '@/widgets/info/UI'
import Review from '@/widgets/review/UI'
import About from '@/widgets/about/UI'
import Program from '@/widgets/program/UI'
import styles from '@/shared/styles/pages/b2b.module.scss'
import Items from '@/widgets/intro/UI/items'
import Vitamit from '@/widgets/vitamit/UI'
import React from 'react'
import VitamitMobile from '@/widgets/vitamit-mobile/UI'

export default function B2B() {
  return (
    <Wrapper page='b2b'>
      <div className={styles.mobile}>
        <Items page='b2b' />
      </div>
      <About />
      <Info variantWithButton />
      <Program />
      <Vitamit />
      <VitamitMobile />
      <Info />
      <Review />
      <Info variantWithButton />
    </Wrapper>
  )
}
