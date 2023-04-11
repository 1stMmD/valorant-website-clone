import { useState } from "react";

import IconButton from '../shared/buttons/icon-button'
import { BiSearch } from "react-icons/bi"
import { VscChromeClose } from "react-icons/vsc"

const RiotSearch = () => {
    const [show , setShow] = useState(false);
    const [value , setValue] = useState<string>("")
    return (
    <form
    onSubmit={(e) => {
        e.preventDefault()
        const a = document.createElement("a")
        a.href = "https://www.riotgames.com/en/search?q=" + value
        a.click()
    }}
    className='
    flex
    items-center
    rounded-lg
    bg-neutral-800
    font-DINNext
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
            value={value}
            onChange={(e) => {
                setValue(e.target.value)
            }}
            className='
            bg-transparent
            mr-3
            outline-none
            text-white
            tracking-[1px]
            w-[120px]
            '/>

            <IconButton
            onClick={() => {
                setShow(false)
                setValue("")
            }}>
                <VscChromeClose/>
            </IconButton>
        </span>
    </form>
    )
}

export default RiotSearch