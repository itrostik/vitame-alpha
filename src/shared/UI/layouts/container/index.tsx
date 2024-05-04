import styles from './styles.module.scss'

import LayoutProps from '@/shared/interfaces/layout-props'

interface Props extends LayoutProps {}

const Container = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>
}

export default Container
