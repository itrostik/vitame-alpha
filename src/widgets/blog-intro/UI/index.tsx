import React from 'react'

import Image from 'next/image'

import cn from 'classnames'

import styles from './styles.module.scss'

import Container from '@/shared/UI/layouts/container'

const BlogIntro = () => {
  return (
    <section className={styles.intro}>
      <Container>
        <div className={styles.wrapper}>
          <h1 className={cn(styles.heading, styles.desktop)}>Блог</h1>
          <div className={styles.shell}>
            <Image
              src='/images/blog-intro.jpg'
              alt=''
              width={728}
              height={499}
              className={styles.image}
            />
            <div />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default BlogIntro
