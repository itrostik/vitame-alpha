import React from 'react'

import Link from 'next/link'

import styles from './styles.module.scss'

import cn from 'classnames'

import Container from '@/shared/UI/layouts/container'

import Whatsapp from '@/shared/UI/icons/whatsapp'
import Telegram from '@/shared/UI/icons/telegram'
import Inst from '@/shared/UI/icons/inst'
import VK from '@/shared/UI/icons/VK'
import Logo from '@/shared/UI/logo'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.top}>
                    <div className={styles.block}>
                        <nav className={styles.navbar}>
                            {/*<h3 className={styles.heading}>Навигация</h3>*/}
                            <div className={styles.links}>
                                <Link className={styles.link} href='#reason'>
                                    О нас
                                </Link>
                                <Link className={styles.link} href='#approach'>
                                    Научный подход
                                </Link>
                                <Link className={styles.link} href='/products'>
                                    Продукты
                                </Link>
                                <Link className={styles.link} href='#FAQ'>
                                    FAQ
                                </Link>
                                <Link className={styles.link} href='#'>
                                    Сотрудничество
                                </Link>
                            </div>
                        </nav>
                        <div className={styles.desktop}>
                            <div className={styles.buttons}>
                                <button className={cn(styles.google, styles.button)}></button>
                                <button className={cn(styles.apple, styles.button)}></button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.reverse}>
                        <div className={cn(styles.block, styles.company)}>
                            {/*<h3 className={styles.heading}>Компания</h3>*/}
                            {/*<p className={cn(styles.text, styles.meta)}>*/}
                            {/*    Общество с ограниченной ответственностью «ВИТА МИ» <br />*/}
                            {/*    ИНН 9714018659 <br />*/}
                            {/*    ОГРН 1237700583427 <br />*/}
                            {/*    Юридический адрес: 125284, Г. Москва, ВН.ТЕР.Г. Муниципальный округ*/}
                            {/*    Беговой, Пр-кт Ленинградский, д.29, к.1, помещ. 396*/}
                            {/*</p>*/}
                            {/*<p className={styles.text}>*/}
                            {/*    Компания VITAME не оказывает медицинские услуги, не осуществляет*/}
                            {/*    медицинскую деятельность, включая профилактику, диагностику и*/}
                            {/*    лечение заболеваний.*/}
                            {/*</p>*/}
                            {/*<p className={cn(styles.text, styles.mobile)}>*/}
                            {/*    Продукты VITAME не являются лекарственным средством.*/}
                            {/*</p>*/}
                            <p className={styles.text}>
                                ООО "ВИТА МИ" не оказывает медицинские услуги, не осуществляет
                                медицинскую деятельность, включая профилактику, диагностику и
                                лечение заболеваний, и не заменяет медицинских консультаций. Все
                                рекомендации не носят предписательного характера.
                            </p>
                            <p className={styles.text}>
                                Продукты, размещённые на ресурсах VITAME не являются лекарственными
                                средствами. <br /> Пожалуйста, ознакомьтесь с{' '}
                                <Link href='/agreement'>Пользовательским соглашением</Link> и{' '}
                                <Link href='/policy'>Политикой конфиденциальности</Link> перед
                                покупкой услуг VITAME
                            </p>
                            <div className={styles.mobile}>
                                <p className={styles.mail}>info@vitame.pro</p>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.self}>
                                {/*<h3 className={styles.heading}>Контакты</h3>*/}
                                <div className={styles.contacts}>
                                    <p className={styles.text}>
                                        ООО «ВИТА МИ» <br />
                                        ИНН 9714018659 <br />
                                        ОГРН 1237700583427 <br />
                                        Юридический адрес: 125284, Г. Москва, <br />
                                        ВН.ТЕР.Г. Муниципальный округ Беговой, Пр-кт Ленинградский,
                                        д.29, к.1, помещ. 396
                                    </p>
                                    <div className={styles.desktop}>
                                        <p className={styles.mail}>info@vitame.pro</p>
                                    </div>
                                    {/*<div className={styles.media}>*/}
                                    {/*    <Link href=''>*/}
                                    {/*        <VK />*/}
                                    {/*    </Link>*/}
                                    {/*    <Link href=''>*/}
                                    {/*        <Inst />*/}
                                    {/*    </Link>*/}
                                    {/*    <Link href=''>*/}
                                    {/*        <Telegram />*/}
                                    {/*    </Link>*/}
                                    {/*    <Link href=''>*/}
                                    {/*        <Whatsapp />*/}
                                    {/*    </Link>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                        <div className={styles.mobile}>
                            <div className={styles.buttons}>
                                <button className={cn(styles.google, styles.button)}></button>
                                <button className={cn(styles.apple, styles.button)}></button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className={styles.bottom}>
                <Container>
                    <div className={styles.mobile}>
                        {/*<div className={styles.links}>*/}
                        {/*    <Link className={styles.link} href='#'>*/}
                        {/*        Политика конфиденциальности*/}
                        {/*    </Link>*/}
                        {/*    <Link className={styles.link} href='#'>*/}
                        {/*        Отказ от ответственности*/}
                        {/*    </Link>*/}
                        {/*</div>*/}
                        <div className={styles.items}>
                            <Logo />
                            <p className={styles.text}>©2024 Vitame</p>
                        </div>
                    </div>
                    <div className={styles.desktop}>
                        <Logo />
                        {/*<Link className={styles.link} href='#'>*/}
                        {/*    Политика конфиденциальности*/}
                        {/*</Link>*/}
                        {/*<Link className={styles.link} href='#'>*/}
                        {/*    Отказ от ответственности*/}
                        {/*</Link>*/}
                        <p className={styles.text}>©2024 Vitame</p>
                    </div>
                </Container>
            </div>
        </footer>
    )
}

export default Footer
