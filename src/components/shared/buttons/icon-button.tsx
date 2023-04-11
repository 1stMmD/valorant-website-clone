import React from 'react'

type props = {
    children : JSX.Element,
    onClick ?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    className ? : string
}

const IconButton = ({
    children,
    onClick,
    className
} : props) => {
  return (
    <button
    type="button"
    onClick={onClick}
    className={`
    text-white
    text-[1.5rem]
    p-3
    rounded-xl
    ${className ? className : ""}
    `}>
        {
            children
        }
    </button>
  )
}

export default IconButton