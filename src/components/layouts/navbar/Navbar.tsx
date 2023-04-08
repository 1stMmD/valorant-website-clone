import { useEffect, useState } from "react"
import Valorant from '../../svg/Valorant'
import RiotGames from '../../svg/riot-games'
import { TbWorld } from "react-icons/tb"
import RiotSearch from '../../constructs/riot-search'
import NavbarSections from './navbar-sections'
import NavbarMobile from "./navbar-mobile"

function Navbar() {
    const [isLG, setIsLG] = useState<boolean>(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px)");
        setIsLG(mediaQuery.matches);

        const handler = (e : any) => {
            setIsLG(e.matches)
        };

        mediaQuery.addListener(handler);

        return () => {
            mediaQuery.removeListener(handler);
        };
    }, []);

  return (
    <nav
    className='
    sticky
    flex
    items-center
    top-0
    left-0
    px-4
    lg:px-9
    gap-x-6
    h-[78px]
    bg-neutral-900
    border-b-[2px]
    border-neutral-800
    z-[5]
    '>
        <span
        className='
        flex-shrink-0
        flex
        items-center
        gap-6
        '>
            <RiotGames
            className='
            h-[26px]
            fill-white
            transition-colors
            hover:fill-cyan-500
            '/>
            <Valorant
            className='
            h-[26px]
            '/>
        </span>

        { isLG ? <NavbarSections/> : <></>}

        <div
        className='
        flex-shrink-0
        ml-auto
        flex
        items-center
        gap-4
        '>

            { isLG && <RiotSearch/>}

            <button
            className='
            text-secondary
            text-[1.5rem]
            bg-neutral-800
            p-3
            rounded-xl
            '>
                <TbWorld/>
            </button>

            { isLG ? 
            <button
            className='
            uppercase
            bg-red-500
            px-3
            py-1
            rounded-lg
            font-DINNext
            font-medium
            flex-shrink-0
            '>
                Play now
            </button>
            :
            <NavbarMobile/>
            }
            
        </div>
    </nav>
  )
}

export default Navbar