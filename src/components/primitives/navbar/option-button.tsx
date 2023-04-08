import React from 'react'

type props = {
    name :  string,
    onClick ?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    Icon ?: JSX.Element
}

const OptionButton = ({
    name,
    onClick,
    Icon
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
        {Icon ? Icon : <></>}
    </button>
  )
}

export default OptionButton