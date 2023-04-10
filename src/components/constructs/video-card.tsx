import React from 'react'
import VideoPlay from '../svg/video-play'

type props = {
    src : string,
    poster : string,
}

const VideoCard = ({
    src,
    poster
} : props) => {
  return (
    <div
    className='
    group
    relative
    w-full
    aspect-video
    cursor-pointer
    '
    >
        <video 
        muted
        autoPlay
        loop

        className='
        w-full
        object-cover
        object-center

        '
        poster={poster}
        >
            <source
            src={src}
            />
            Your browser doesn't support videos
        </video>

        <button
        className='
        overflow-hidden
        absolute
        bottom-[50%]
        right-[50%]
        translate-x-[50%]
        translate-y-[50%]
        border-white
        border-[1px]
        bg-blue-500/60
        '>
            <div
            className='
            relative
            '>
                <VideoPlay
                className='
                transition-transform
                group-hover:scale-110
                w-[70px]
                stroke-white
                '
                />

                <span
                className='
                z-[-1]
                transition-transform
                duration-300
                -translate-x-[150%]
                group-hover:-translate-x-[50%]
                top-0
                -skew-x-12
                absolute
                w-[130%]
                h-full
                bg-neutral-700
                '
                />
            </div>
        </button>

    </div>
  )
}

export default VideoCard