import styles from '@/shared/styles/pages/home.module.scss'

import Wrapper from '@/shared/UI/layouts/wrapper'

import Items from '@/widgets/intro/UI/items'

import Problem from '@/widgets/problem/UI'
import Quality from '@/widgets/quality/UI'
import Algorithm from '@/widgets/algorithm/UI'
import Reason from '@/widgets/reason/UI'
import Products from '@/widgets/products/UI'
import Approach from '@/widgets/approach/UI'
import People from '@/widgets/people/UI'
import Priority from '@/widgets/priority/UI'
import FAQ from '@/widgets/FAQ/UI'
import News from '@/widgets/news/UI'

const Home = () => {
  return (
    <Wrapper page='home'>
      <div className={styles.mobile}>
        <Items page='home' />
      </div>

      <Problem />
      <Quality />
      <Algorithm />
      <Reason />
      {/*<Priority />*/}
      {/*<Products />*/}
      {/*<Approach />*/}
      {/*<People />*/}
      {/*<Review />*/}
      {/*<FAQ />*/}
      {/*<News />*/}
    </Wrapper>
  )
}

export default Home
