import React from 'react'

type props = {
    className : string
}

const VideoClose = ({
    className
} : props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 72 72" xmlSpace="preserve">
        <path fill="none" d="m61.5 9.5-7 7m-38 38-7 7M30.3 42l2.8-3m8.6 3L30.3 30m11.4 0-2.6 2.8">
        </path>
    </svg>
  )
}

export default VideoClose