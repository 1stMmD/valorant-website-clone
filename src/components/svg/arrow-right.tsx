import React from 'react'

type props = {
    className : string,
    stroke : string
}

const ArrowRight = ({
    className,
    stroke
} : props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 25 15">
        <path d="M16.2.5 19.9 4m4.6 3.5-8.3 7" fill="none" className={stroke}></path>
        <path fill="none" className={stroke} stroke-miterlimit="10" d="M16 7.5H0">
        </path>
    </svg>
  )
}

export default ArrowRight