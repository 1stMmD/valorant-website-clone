import React from 'react'

type props = {
    className : string
}


const VideoPlay = ({
    className
} : props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" className={className} xmlSpace="preserve">
        <path fill="none" d="M33.5 34.5v-5l8 6v2l-8 6v-5m28-29-7 7m-38 38-7 7">

        </path>
    </svg>
  )
}

export default VideoPlay