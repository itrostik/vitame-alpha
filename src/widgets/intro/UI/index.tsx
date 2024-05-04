import styles from './styles.module.scss'

import cn from 'classnames'

import Container from '@/shared/UI/layouts/container'

import Items from '@/widgets/intro/UI/items'

interface Props {
  page: 'home' | 'products' | 'identity' | 'b2b'
}

const Intro = ({ page }: Props) => {
  return (
    <section
      className={cn(
        { [styles.intro]: page !== 'b2b' },
        { [styles.expanded]: page === 'home' },
        {
          [styles.b2b]: page === 'b2b'
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
