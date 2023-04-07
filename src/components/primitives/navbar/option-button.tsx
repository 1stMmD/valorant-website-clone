import React from 'react'

type props = {
    name :  string,
    onClick ?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const OptionButton = ({
    name,
    onClick
} : props) => {
  return (
    <button
    onClick={onClick}
    className='
    px-4
    py-2
    hover:bg-neutral-700
    flex
    items-center
    uppercase
    rounded-md
    '>
        {name}
    </button>
  )
}

export default OptionButton