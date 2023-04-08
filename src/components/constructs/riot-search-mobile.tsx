import { useState } from "react";

import IconButton from '../shared/buttons/icon-button'
import { BiSearch } from "react-icons/bi"
import { VscChromeClose } from "react-icons/vsc"

const RiotSearchMobile = () => {
    const [value , setValue] = useState("");

    return (
    <div
    className='
    flex
    items-center
    rounded-lg
    bg-neutral-700
    '>
        <IconButton
        className="
        !p-3
        ">
            <BiSearch/>
        </IconButton>

        <input
        value={value}
        onChange={(e) => {
            setValue(e.target.value)
        }}
        className='
        flex-shrink
        bg-transparent
        mr-3
        outline-none
        text-white
        w-full
        '/>

        <IconButton
        className="
        !p-3
        !text-neutral-300
        "
        onClick={() => {
            setValue("")
        }}>
            <VscChromeClose/>
        </IconButton>
    </div>
    )
}

export default RiotSearchMobile