import Image from 'next/image'

import styles from './styles.module.scss'

import Section from '@/shared/UI/layouts/section'

const Priority = () => {
    return (
        <Section id='priority' heading='Забота о вашем здоровье – наш приоритет'>
            <div className={styles.content}>
                {/*<p className={styles.text}>*/}
                {/*    Используем передовые научные технологии, следим за новыми разработками,*/}
                {/*    совершенствуем комплексы, чтобы они давали быстрые и ощутимые результаты.*/}
                {/*    Предлагаем не все, а то, что нужно именно вам.*/}
                {/*</p>*/}
                <Image
                    className={styles.image}
                    src='/images/health.jpg'
                    alt='Health'
                    width={1600}
                    height={900}
                />
            </div>
        </Section>
    )
}

export default Priority
