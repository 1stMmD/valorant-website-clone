import React from 'react'
import { FiArrowUpRight } from "react-icons/fi"
type props = {
    name :  string,
    onClick ?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    Icon ?: JSX.Element,
    external ?: boolean
}

const OptionButton = ({
    name,
    onClick,
    Icon , 
    external = false
} : props) => {
  return (
    <button
    onClick={onClick}
    className='
    px-4
    py-3
    w-full
    lg:py-2
    hover:bg-neutral-700
    flex
    items-center
    justify-between
    lg:justify-start
    uppercase
    rounded-md
    font-DINNext
    '>
        {name}
        {Icon ? Icon : <></>}
        {external ?
        <span
        className='
        text-[1.5rem]
        lg:text-[1rem]
        '>
          <FiArrowUpRight/>
        </span>
        :
        <></>}
    </button>
  )
}

export default OptionButton