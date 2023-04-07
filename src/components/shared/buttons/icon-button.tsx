import React from 'react'

type props = {
    children : JSX.Element,
    onClick ?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    
}

const IconButton = ({
    children,
    onClick
} : props) => {
  return (
    <button
    onClick={onClick}
    className='
    text-white
    text-[1.5rem]
    p-3
    '>
        {
            children
        }
    </button>
  )
}

export default IconButton