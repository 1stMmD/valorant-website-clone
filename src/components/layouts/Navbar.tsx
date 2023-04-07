import Valorant from '../svg/Valorant'
import RiotGames from '../svg/riot-games'
import { TbWorld } from "react-icons/tb"
import RiotSearch from '../constructs/riot-search'

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
    gap-x-3
    h-[78px]
    bg-neutral-900
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

        <div
        className='
        flex-grow-0
        flex
        flex-wrap
        items-center
        h-full
        relative
        overflow-y-hidden
        '>
            {sections.map((item , idx) => {
                return(
                    <span
                    className='
                    flex-shrink-0
                    text-secondary
                    relative
                    flex
                    items-center
                    h-full
                    '
                    key={idx}>
                        
                        <button
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
                            {item}
                        </button>
                        
                        <span
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
                        '/>
                    </span>
                )
            })}
        </div>

        <div
        className='
        flex-shrink-0
        ml-auto
        flex
        items-center
        gap-3
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

const sections = [
    "Game Info",
    "Media",
    "News",
    "Leaderboards",
    "More",
    "More",
    "More",
    "More",
]