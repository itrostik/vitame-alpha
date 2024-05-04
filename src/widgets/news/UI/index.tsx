'use client'

import React, { useState } from 'react'

import axios from 'axios'

import Image from 'next/image'
import Link from 'next/link'

import styles from './styles.module.scss'

import cn from 'classnames'

import { useFormik } from 'formik'

import * as Yup from 'yup'

import Container from '@/shared/UI/layouts/container'
import Input from '@/shared/UI/input'
import { addDoc, collection, getDocs, query, where } from '@firebase/firestore'
import { db } from '@/shared/config/firebase'
import useNotificationStore from '@/widgets/notification/model/store'
import formatPhoneNumber from '@/shared/utils/format-phone-number'

const News = () => {
    const [isApproved, setIsApproved] = useState(false)
    const [value, setValue] = useState('')

    const { isNotificationHidden, setIsNotificationHidden } = useNotificationStore()

    const validationSchema = Yup.object({
        email: Yup.string()
            .matches(/^[\w.-]+@[\w.-]+\.\w+$/, 'Please enter a valid email address')
            .required('Email is required')
    })

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema,
        onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
            const emailsRef = collection(db, 'mailing')
            const q = query(emailsRef, where('email', '==', values.email))

            try {
                const querySnapshot = await getDocs(q)
                if (querySnapshot.docs.length > 0) {
                    setErrors({ email: 'Этот email уже подписан.' })
                } else {
                    await addDoc(emailsRef, {
                        email: values.email
                    })

                    fetch('https://back.vitame.pro/send/', {
                        method: 'POST',
                        mode: 'no-cors',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            ['Вид']: 'Заявка на рассылку',
                            ['Email']: values.email
                        })
                    })
                        .then((response) => response.json())
                        .then((data) => console.log(data))
                        .catch((error) => console.error('Error:', error))
                }

                setIsNotificationHidden(false)
                setIsApproved(false)
            } catch (error) {
                console.error('Error adding document: ', error)
            } finally {
                setSubmitting(false)

                resetForm()
            }
        }
    })

    return (
        <section className={styles.section}>
            <Container>
                <div className={styles.wrapper}>
                    <Image
                        className={styles.image}
                        src='/images/news.jpg'
                        alt=''
                        width={535}
                        height={360}
                    />
                    <div className={styles.content}>
                        <h3 className={styles.heading}>
                            Подпиши<span className={styles.danger}>те</span>сь на рассылку, <br />{' '}
                            чтобы следить за новостями VITA<span className={styles.alpha}>ME</span>
                        </h3>
                        <div className={styles.middle}>
                            <Input
                                type='email'
                                name='email'
                                placeholder='E-mail'
                                isValid={formik.errors.email !== 'Этот email уже подписан.'}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            <div className={styles.approval}>
                                <button
                                    className={cn(styles.void, { [styles.approved]: isApproved })}
                                    onClick={() => setIsApproved((prevState) => !prevState)}
                                >
                                    <div className={styles.circle}></div>
                                </button>
                                <p>
                                    Даю согласие на обработку{' '}
                                    <Link className={styles.link} href='/'>
                                        Персональных данных
                                    </Link>
                                </p>
                            </div>
                            <button
                                className={styles.button}
                                disabled={
                                    !isApproved ||
                                    !formik.isValid ||
                                    formik.values.email.length === 0
                                }
                                onClick={() => formik.handleSubmit()}
                            >
                                Подписаться
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default News
