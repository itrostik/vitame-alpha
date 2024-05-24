import styles from './styles.module.scss'

import Container from '@/shared/UI/layouts/container'

const Reason = () => {
  const items = [
    'Нам важно, чтобы вы получили результат и чувствовали себя лучше каждый день.',
    'Витамины и микроэлементы высокого качества, отобранные научной командой VITAME.',
    'Максимальная совместимость компонентов – они быстро и легко усваиваются.',
    'Индивидуальные дозировки, а не общие нормы и рекомендации.'
  ]

  return (
    <>
      <div id='reason' className={styles.reason}></div>
      <section className={styles.section}>
        <Container>
          <div className={styles.content}>
            <div className={styles.info}>
              <h2 className={styles.heading}>
                Почему Vita<span>me</span> ?
              </h2>
              <p className={styles.text}>
                Решений на рынке много, а удобное – только одно. <br /> Не нужно носить с собой
                таблетницы и покупать разные банки с витаминами, получите витамины там, где вы
                находитесь сейчас. В офисе, в спортзале – достаточно подойти к автомату VITAME.
                Получить индивидуальную порцию витаминов так же просто, как и выпить чашку кофе в
                перерыве.
              </p>
            </div>
          </div>
          <div className={styles.items}>
            {items.map((item, index) => {
              return (
                <div key={index} className={styles.item}>
                  <h3 className={styles.digit}>{index + 1}</h3>
                  <p>{item}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>
    </>
  )
}

export default Reason
