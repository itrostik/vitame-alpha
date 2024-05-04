'use client'

import { useState } from 'react'

import cn from 'classnames'

import { motion } from 'framer-motion'

import styles from './styles.module.scss'

import Section from '@/shared/UI/layouts/section'
import Container from '@/shared/UI/layouts/container'

import Plus from '@/shared/UI/icons/plus'
import Minus from '@/shared/UI/icons/minus'

const FAQ = () => {
    const items = [
        {
            id: 0,
            question: 'Как формируются рекомендации?',
            answer: 'На основе экспертных оценок, которые были оцифрованы и интегрированы в алгоритм обработки данных из вашей анкеты. Наш экспертный совет создал единую систему рекомендаций на основе полученных анкетных данных. Она позволяет проанализировать потребности каждого пользователя и подобрать индивидуальный комплекс витаминов и минералов – то, что нужно именно вам.'
        },
        {
            id: 1,
            question: 'Могу ли я получить витамин, который выберу сам (его нет в рекомендациях)?',
            answer: 'Мы не советуем делать так – самостоятельное назначение может привести к переизбытку веществ. Это дополнительно нагружает печень и почки. Поэтому наш алгоритм назначает только те микронутриенты, в которых нуждается ваш организм.'
        },
        {
            id: 2,
            question: 'Как я пойму, что находится в каждой капсуле в моей порции?',
            answer: 'У каждой позиции – индивидуальная оболочка. Название и состав есть в нашем каталоге и в мобильном приложении. Ориентируйтесь по цвету капсулы, это удобно.'
        },
        {
            id: 3,
            question: 'Как принимать витамины?',
            answer: 'Наш алгоритм делит прием на утренний и вечерний, чтобы микроэлементы и витамины усваивались лучше. Принимайте их вместе с полноценным приемом пищи – так они будут лучше всасываться, а вероятность побочных эффектов будет низкой. Мы не рекомендуем запивать капсулы напитками, в которых есть кофеин (чай, кофе, газировки).'
        },
        {
            id: 4,
            question: 'Можно ли употреблять все витамины вместе?',
            answer: 'Да, наш алгоритм учитывает совместимость компонентов – это безопасно.'
        },
        {
            id: 5,
            question: 'Можно пить витамины на голодный желудок?',
            answer: 'Мы не рекомендуем делать так или заменять ими прием пищи – это может вызвать дискомфорт и снизить эффективность. Витамины и минералы будут усваиваться лучше, если вы поели.'
        },
        {
            id: 6,
            question: 'Сколько порций я могу получить за раз?',
            answer: (
                <div className={styles.description}>
                    <p>
                        Один подход к автомату (один QR код) дает возможность получить
                        индивидуальный комплекс витаминов на один прием по рекомендациям, но не
                        более 10 капсул за раз.
                    </p>
                    <p>
                        Вы можете использовать новый QR код для еще одной выдачи, но меняйте
                        стаканчики, чтобы не перепутать капсулы для утреннего и вечернего приема.
                    </p>
                </div>
            )
        },
        {
            id: 7,
            question: 'Как подтверждено качество?',
            answer: (
                <div className={styles.description}>
                    <p>
                        Мы используем только сертифицированное сырье, все наши витамины и
                        микроэлементы имеют подтверждающую документацию. Она находится в свободном
                        доступе, с ней можно ознакомиться в разделе <span>каталога</span>.
                    </p>
                    <p>
                        У всех витаминов и микроэлементов VITAME есть сроки годности, их можно
                        проверить при выдаче. Мы внимательно их отслеживаем, чтобы вы получали
                        только свежие капсулы.
                    </p>
                </div>
            )
        }
    ]

    const [isHidden, setIsHidden] = useState<Boolean[]>(items.map((_, index) => index !== 0))

    const variants = {
        opened: { opacity: 1, height: 'auto' },
        closed: { opacity: 0, height: 0 }
    }

    const handleClick = (i: number) => {
        setIsHidden((prevState) => {
            return [...prevState].map((item, index) => (index === i ? !prevState[index] : true))
        })
    }

    const transition = {
        type: 'spring',
        stiffness: 700,
        damping: 60
    }

    return (
        <Section id='FAQ' heading='Ответы на вопросы'>
            <Container>
                <div className={styles.questions}>
                    {items.map((item, index) => (
                        <div key={item.id} className={styles.item}>
                            <div className={styles.top}>
                                <h3 className={styles.question}>{item.question}</h3>
                                <button
                                    className={styles.button}
                                    onClick={() => handleClick(index)}
                                >
                                    {isHidden[index] ? <Plus /> : <Minus />}
                                </button>
                            </div>
                            <motion.div
                                className={cn(styles.answer, { [styles.opened]: !isHidden[index] })}
                                initial={false}
                                animate={isHidden[index] ? 'closed' : 'opened'}
                                variants={variants}
                                transition={transition}
                            >
                                {item.answer}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}

export default FAQ
