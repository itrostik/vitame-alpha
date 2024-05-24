import React from 'react'

const Clock = () => {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M10 17.5C14.1424 17.5 17.5 14.1416 17.5 10C17.5 5.85757 14.1424 2.5 10 2.5C5.85757 2.5 2.5 5.85757 2.5 10C2.5 14.1416 5.85757 17.5 10 17.5Z'
        stroke='#828990'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.5 10H16.1492M10 17.5V16.1492M2.5 10H3.85163M10 2.5V3.85163'
        stroke='#828990'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.3722 12.143L9.72656 10.5619V7.14679'
        stroke='#828990'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default Clock
