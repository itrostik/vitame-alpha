import styles from './styles.module.scss'

import cn from 'classnames'

import Container from '@/shared/UI/layouts/container'

import Items from '@/widgets/intro/UI/items'
import BlogIntro from '@/widgets/blog-intro/UI'

interface Props {
  page: 'home' | 'products' | 'identity' | 'partnership' | 'blog'
}

const Intro = ({ page }: Props) => {
  if (page === 'blog') {
    return <BlogIntro />
  }

  return (
    <section
      className={cn(
        { [styles.intro]: page !== 'partnership' },
        { [styles.expanded]: page === 'home' },
        {
          [styles.b2b]: page === 'partnership'
        }
      )}
    >
      <Container>
        <div></div>
        <div className={styles.desktop}>
          <Items page={page} />
        </div>
      </Container>
    </section>
  )
}

export default Intro
