import React from 'react'

import styles from './styles.module.scss'
import cn from 'classnames'

interface Props {
    placeholder: string
    value: string
    type?: string
    name?: string
    maxLength?: number
    isValid?: boolean
    onChange: (event: any) => void
    onBlur: (event: any) => void
}

const Input = ({
    type = 'text',
    name = '',
    placeholder,
    value,
    onChange,
    isValid = true,
    maxLength = 50,
    onBlur
}: Props) => {
    return (
        <input
            className={cn(styles.input, { [styles.invalid]: !isValid })}
            type={type}
            name={name}
            placeholder={placeholder}
            maxLength={maxLength}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
        />
    )
}

export default Input
