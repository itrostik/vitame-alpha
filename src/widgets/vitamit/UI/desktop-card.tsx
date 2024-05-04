import { CardType } from '../utils/cardType'
import styles from './styles.module.scss'
import Link from 'next/link'
import { CSSProperties } from 'react'
interface Props {
  list: CardType[]
}
const DesktopCard = ({ list }: Props) => {
  const getStyle = (card: CardType): CSSProperties => {
    const styles: CSSProperties = {
      top: card.topOnDesktop
    }
    if (card.positionOnDesktop === 'right') {
      styles.left = 'calc(50% + ' + card.paddingOnDesktop + 'px)'
    } else {
      styles.right = 'calc(50% + ' + card.paddingOnDesktop + 'px)'
    }
    return styles
  }

  return (
    <div className={styles.desktop}>
      {list.map((card, i) => {
        return (
          <div key={i} className={styles.block} style={getStyle(card)}>
            <div className={styles.card}>
              <h3 className={styles.name}>{card.title}</h3>
              <div className={styles.text}>{card.description}</div>
              {card.link && (
                <Link href={card.link.url} className={styles.link}>
                  {card.link.text}
                </Link>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default DesktopCard
