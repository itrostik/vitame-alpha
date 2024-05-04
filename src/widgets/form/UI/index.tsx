import React, { useEffect, useState } from 'react'

import styles from './styles.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import Input from '@/shared/UI/input'
import { addDoc, collection, getDocs, query, where } from '@firebase/firestore'
import { db } from '@/shared/config/firebase'
import useFormStore from '@/widgets/form/model/store'
import formatPhoneNumber from '@/shared/utils/format-phone-number'
import axios from 'axios'

const Form = () => {
    const [isApproved, setIsApproved] = useState(false)
    const [isSent, setIsSent] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const { isFormHidden, setIsFormHidden } = useFormStore()

    useEffect(() => {
        if (isFormHidden) {
            setIsSent(false)
        }
    }, [isFormHidden])

    const formik = useFormik({
        initialValues: {
            name: '',
            company: '',
            phone: '',
            email: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Имя обязательно').max(50).min(2),
            company: Yup.string().required('Название компании обязательно').max(50).min(2),
            phone: Yup.string().required('Телефон обязателен').max(18).min(18),
            email: Yup.string().matches(
                /^[\w.-]+@[\w.-]+\.\w+$/,
                'Please enter a valid email address'
            )
        }),
        onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
            if (!isApproved) {
                alert('Пожалуйста, дайте согласие на обработку персональных данных.')
                setSubmitting(false)
                return
            }

            const applicationsRef = collection(db, 'applications')
            const emailQuery = query(applicationsRef, where('email', '==', values.email))
            const companyQuery = query(applicationsRef, where('company', '==', values.company))

            try {
                const emailSnapshot = await getDocs(emailQuery)
                const companySnapshot = await getDocs(companyQuery)

                if ((!emailSnapshot.empty && values.email) || !companySnapshot.empty) {
                    let errors = {
                        email: '',
                        company: ''
                    }

                    if (!emailSnapshot.empty) {
                        errors.email = 'Этот email уже используется.'
                    }

                    if (!companySnapshot.empty) {
                        errors.company = 'Это название компании уже используется.'
                    }

                    setErrors(errors)
                } else {
                    setIsLoading(true)

                    await addDoc(applicationsRef, values)

                    fetch('https://back.vitame.pro/send/', {
                        method: 'POST',
                        mode: 'no-cors',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            ['Вид']: 'Заявка на сотрудничество',
                            ['Имя']: values.name,
                            ['Компания']: values.company,
                            ['Телефон']: formatPhoneNumber(values.phone),
                            ['Email']: values.email || 'Не указано'
                        })
                    })
                        .then((response) => response.json())
                        .then((data) => console.log(data))
                        .catch((error) => console.error('Error:', error))
                }

                setIsSent(true)
                setIsApproved(false)
                setIsLoading(false)
            } catch (error) {
                console.error('Ошибка при отправке формы: ', error)
                alert('Произошла ошибка при отправке. Попробуйте снова.')
            } finally {
                resetForm()

                setSubmitting(false)
            }
        }
    })

    return isSent ? (
        <div className={styles.form}>
            <h3 className={styles.heading}>Заявка принята!</h3>
            <p className={styles.description}>Скоро с вами свяжется наш менеджер</p>
            <button className={styles.button} onClick={() => setIsFormHidden(true)}>
                Закрыть
            </button>
        </div>
    ) : (
        <div className={styles.form}>
            <h3 className={styles.heading}>Заявка на сотрудничество</h3>
            <div className={styles.content}>
                <p className={styles.description}>
                    Оставьте ваши контакты, и наш <br /> менеджер скоро с вами свяжется!
                </p>
                <div className={styles.inputs}>
                    <Input
                        value={formik.values.name}
                        type='text'
                        name='name'
                        placeholder='Имя'
                        maxLength={50}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <Input
                        value={formik.values.company}
                        type='text'
                        name='company'
                        placeholder='Компания'
                        maxLength={50}
                        isValid={
                            formik.errors.company !== 'Это название компании уже используется.'
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <Input
                        value={formik.values.phone}
                        type='tel'
                        name='phone'
                        placeholder='Телефон'
                        maxLength={18}
                        onChange={(e) => {
                            const formattedPhoneNumber = formatPhoneNumber(e.target.value)
                            formik.handleChange(e)
                            formik.setFieldValue('phone', formattedPhoneNumber)
                        }}
                        onBlur={formik.handleBlur}
                    />
                    <Input
                        value={formik.values.email}
                        type='email'
                        name='email'
                        placeholder='E-mail'
                        maxLength={50}
                        isValid={formik.errors.email !== 'Этот email уже используется.'}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
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
                    disabled={!isApproved || !formik.isValid || isLoading}
                    onClick={() => formik.handleSubmit()}
                >
                    Оставить заявку
                </button>
            </div>
        </div>
    )
}

export default Form
