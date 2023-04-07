import Valorant from '../../svg/Valorant'
import RiotGames from '../../svg/riot-games'
import { TbWorld } from "react-icons/tb"
import RiotSearch from '../../constructs/riot-search'
import NavbarSections from './navbar-sections'

function Navbar() {
  return (
    <nav
    className='
    sticky
    flex
    items-center
    top-0
    left-0
    px-9
    gap-x-6
    h-[78px]
    bg-neutral-900
    border-b-[2px]
    border-neutral-800
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

        <NavbarSections/>

        <div
        className='
        flex-shrink-0
        ml-auto
        flex
        items-center
        gap-4
        '>

            <RiotSearch/>

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
            
        </div>
    </nav>
  )
}

export default Navbar