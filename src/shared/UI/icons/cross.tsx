import React from 'react'

const Cross = ({ color = 'black' }: { color?: string }) => {
    return (
        <svg
            width='35'
            height='36'
            viewBox='0 0 35 36'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <rect
                x='10'
                y='9'
                width='24'
                height='2.4'
                rx='1.2'
                transform='rotate(45 10 9)'
                fill={color}
            />
            <rect
                x='8'
                y='26'
                width='24'
                height='2.4'
                rx='1.2'
                transform='rotate(-45 8 26)'
                fill={color}
            />
        </svg>
    )
}

export default Cross
