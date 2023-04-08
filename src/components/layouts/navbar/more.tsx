import React, { useState } from 'react'
import OptionButton from '../../primitives/navbar/option-button'
import { TiArrowSortedDown } from "react-icons/ti"

type props = {
    onMouseEnter : (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    onMouseLeave : (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const More = ({
    onMouseEnter,
    onMouseLeave
}: props) => {
  return (
    <span
    className='
    flex-shrink-0
    text-secondary
    relative
    flex
    items-center
    h-full
    '
    >
        
        <button
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className='
        peer
        font-DINNext
        uppercase
        text-[.87rem]
        tracking-[1px]
        font-medium
        px-3
        py-1
        hover:bg-neutral-800
        rounded-lg
        '>
            {"more"}
        </button>
        
        {
        false ? <span
        className='
        z-[3]
        transition-all
        peer-hover:max-w-full
        absolute
        bottom-2
        left-0
        right-0
        bg-secondary
        h-1
        rounded-full
        max-w-[0px]
        w-full
        
        '/> : 
        <></>}

    </span>
  )
}

export default More

type SectionType = {
  name: string,
  options : SectionType[] | null
}

type ParentProps = {
  section : SectionType
}

export const Parent = ({
  section
} : ParentProps) => {
  const [show , setShow] = useState(false)

  const { name , options } = section

  return(
    <span
    className='
    flex
    flex-col
    '>
      <OptionButton
      onClick={() => {
        setShow(prev => !prev)
      }}
      Icon={
      <span
      className={`
      text-secondary
      text-[1rem]
      ${show ? "" : "rotate-180"}
      `}>
        <TiArrowSortedDown/>
      </span>
      }
      name={name}
      />

      <span
      className='
      flex
      flex-col
      ml-4
      '>
        {
          options && show &&
          options.map((item ,idx) => {
            if(!item.options) return(
              <Child
              section={item}
              key={idx}/>
            )
            return(
              <Parent
              section={item}
              />
            )
          })
        }
      </span>
    </span>
  )
}

export const Child = ({
  section
} : {section : SectionType}) => {
  const { name } = section
  return(
    <OptionButton
    name={name}
    />
  )
}