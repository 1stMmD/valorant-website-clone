import { useState } from "react"
import IconButton from '../../shared/buttons/icon-button'
import {BiMenu } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import Valorant from '../../svg/Valorant';
import RiotSearchMobile from '../../constructs/riot-search-mobile';
import { sections_array } from '../../../constants/navbar';
import { Child, Parent } from './more';

function NavbarMobile() {
    const [show, setShow] = useState<boolean>(false)

    return (
        <div>
            <IconButton
            onClick={() => setShow(true)}
            className='
            bg-neutral-800
            '>
                <BiMenu/>
            </IconButton>

            <div
            className={`
            transition-opacity
            flex
            absolute
            top-0
            right-0
            min-h-screen
            min-w-full
            bg-neutral-900/40
            ${show ? "opacity-100" : "translate-x-[100%] opacity-0"}
            `}/>

            <div
            className={`
            transition-transform
            z-[5]
            flex
            flex-col
            fixed
            top-0
            right-0
            min-h-screen
            max-h-screen
            max-w-[476px]
            min-w-[min(476px,100%)]
            bg-neutral-800
            overflow-y-auto
            p-4
            gap-4
            ${show ? "" : "translate-x-[100%]"}
            `}
            >
                <div
                className='
                flex items-center justify-between
                '>
                    <Valorant
                    className='
                    fill-white
                    '
                    />

                    <IconButton
                    onClick={() => setShow(false)}
                    className='
                    bg-neutral-700
                    '>
                        <VscChromeClose/>
                    </IconButton>
                </div>

                <RiotSearchMobile/>

                <div
                className='
                text-white
                text-[1.2rem]
                font-bold
                tracking-[1px]
                mb-4
                '>
                    {sections_array.map((item , idx) => {
                        if(item.options) return (
                            <Parent
                            key={idx}
                            section={item}
                            />
                        )
                        return(
                            <Child
                            key={idx}
                            section={item}
                            />
                        )
                    })}
                </div>

                <button
                className="
                bg-secondary
                px-4
                py-3
                text-[1.2rem]
                font-DINNext
                uppercase
                rounded-lg
                font-bold
                tracking-[1px]
                text-primary
                ">
                    Play free
                </button>
                
            </div>

        </div>
    )
}

export default NavbarMobile