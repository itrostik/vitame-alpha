import React, { useEffect, useState } from 'react'

import styles from './styles.module.scss'

import useNotificationStore from '@/widgets/notification/model/store'

const Notification = () => {
    const { setIsNotificationHidden } = useNotificationStore()

    return (
        <div className={styles.form}>
            <h3 className={styles.heading}>
                Спасибо! <br /> Ваша заявка получена!
            </h3>
            <button className={styles.button} onClick={() => setIsNotificationHidden(true)}>
                Закрыть
            </button>
        </div>
    )
}

export default Notification
