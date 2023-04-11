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
        px-4
        py-2
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
  external : boolean,
  options : SectionType[] | null,
  url : string
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
        transition-transform
        text-secondary
        text-[1.5rem]
        lg:text-[1rem]
        ${show ? "rotate-180" : ""}
        `}>
          <TiArrowSortedDown/>
        </span>
      }
      name={name}
      />

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
  )
}

export const Child = ({
  section
} : {section : SectionType}) => {
  const { name , external , url} = section
  return(
    <a href={url}>
      <OptionButton
      external={external}
      name={name}
      />
    </a>
  )
}