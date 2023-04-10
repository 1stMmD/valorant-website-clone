import { useState , useEffect } from 'react'

type props = {
    event : {
        url : string,
        banner : string,
        date : string,
        category : string,
        title : string,
    }
}

const EventCard = ({
    event
} : props) => {

  return (
    <a
    className='
    group
    flex
    flex-col
    gap-y-4
    cursor-pointer
    w-full
    relative
    '>
        <div
        className='
        relative
        overflow-hidden
        '>

            <img
            src={event.banner}
            className='
            w-full
            aspect-video
            '
            />

            <span
            className='
            transition-transform
            duration-300
            -translate-x-[150%]
            group-hover:-translate-x-[10%]
            opacity-50
            top-0
            absolute
            inline-block
            w-[120%]
            -skew-x-12
            h-full
            bg-secondary
            '
            />

        </div>

        <div
        className='
        flex
        font-DINNext
        font-bold
        text-[.75rem]
        gap-x-4
        '>
            <span
            className='
            text-primary
            '>
                {
                    event.date
                }
            </span>

            <span
            className='
            text-blue-500
            uppercase
            '>
                {
                    event.category
                }
            </span>
        </div>

        <h3
        className='
        font-DINNext
        font-bold
        text-[1.4rem]
        text-primary
        '>
            {event.title}
        </h3>
    </a>
  )
}

export default EventCard