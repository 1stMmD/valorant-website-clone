import { useState } from "react";

import IconButton from '../shared/buttons/icon-button'
import { BiSearch } from "react-icons/bi"
import { VscChromeClose } from "react-icons/vsc"

const RiotSearch = () => {
    const [show , setShow] = useState(false);

    return (
    <div
    className='
    flex
    items-center
    rounded-lg
    bg-neutral-800
    '>
        <IconButton
        onClick={() => {
            setShow(prev => !prev)
        }}>
            <BiSearch/>
        </IconButton>

        <span
        className={`
        flex
        items-center
        ${show ? "max-w-screen-sm" : "max-w-0"}
        transition-all
        duration-700
        overflow-hidden
        `}>
            <input
            className='
            bg-transparent
            mr-3
            outline-none
            text-white
            w-[120px]
            '/>

            <IconButton
            onClick={() => {
                setShow(false)
            }}>
                <VscChromeClose/>
            </IconButton>
        </span>
    </div>
    )
}

export default RiotSearch