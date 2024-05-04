import React from 'react'
import styles from './styles.module.scss'


const Program = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Комплексная программа здоровья VITAME</h3>
            <div className={styles.content}>
                <div className={styles.block}>
                    <h4 className={styles.heading}>Повышение продуктивности</h4>
                    <p className={styles.text}>Сотрудники будут реже болеть, повысится уровень энергии и улучшится общее самочувствие каждого
                        члена команды. Согласно <span className={styles.highlight}><a href="https://pubmed.ncbi.nlm.nih.gov/30171416/">исследованиям</a></span>, это повысит
                        конкурентоспособность вашей
                        компании.</p>
                    <img src="/images/b2b-program-1.png" alt="" className={styles.image}/>
                </div>
                <div className={styles.block}>
                    <h4 className={styles.heading}>Простое решение самых частых проблем</h4>
                    <p className={styles.text}>По данным <span className={styles.highlight}><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8926136/">исследований</a></span>, дефицит витамина D есть более чем у 50%
                        жителей РФ. Подбирать
                        индивидуальный набор сложно и дорого, а наши добавки помогут справиться с утомляемостью,
                        бессонницей, низкой концентрацией.</p>
                    <img src="/images/b2b-program-2.png" alt="" className={styles.image}/>
                </div>
                <div className={styles.block}>
                    <h4 className={styles.heading}>Рост лояльности к работодателю</h4>
                    <p className={styles.text}>Команда будет знать, что вам не все равно. Повысится мотивация, появится желание приезжать в
                        офис. Согласно последнему <span className={styles.highlight}><a href="https://www.mckinsey.com/industries/consumer-packaged-goods/our-insights/feeling-good-the-future-of-the-1-5-trillion-wellness-market#/">исследованию McKinsey</a></span>, ЗОЖ – приоритет
                        ваших сотрудников. </p>
                    <img src="/images/b2b-program-3.png" alt="" className={styles.image}/>
                </div>
            </div>
        </div>
    )
}

export default Program