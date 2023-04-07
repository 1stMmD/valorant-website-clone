import React, { useEffect, useRef } from 'react'
import {
    Route,
    Routes
} from "react-router-dom"
import Navbar from './components/layouts/navbar/Navbar'
function AppRoutes() {
  const container = useRef<HTMLSpanElement | null>(null)
  const text = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {
    window.onscroll = () => {
      const offset = window.pageYOffset
      const top = container.current?.getClientRects()[0].top ?? 0
      const position = top - (window.innerHeight / 2)

      text.current?.animate({
        transform : `translateY(${(position * -1) * .3}px)`
      },{
        duration: 300,
        easing: 'ease-in-out',
        fill : "forwards"
      })
        
      // if(text.current)
      // text.current.style.transform = `translateY(${(position * -1) * .3}px)`

    }
  },[container , text])
  return (
    <>
        <Navbar/>
        
        {/* <Routes>
            <Route path="/" element={<span>Hello</span>}/>
            <Route path="/agents" element={<span>Bye</span>}/>
        </Routes> */}

        <div
        className='
        flex
        items-center
        justify-center
        w-full
        h-screen
        bg-cyan-500
        '>

        </div>

        <div
        className='
        flex
        items-center
        justify-center
        w-full
        h-screen
        bg-red-500
        '>
          <span ref={container}>
            <p ref={text}>Hello</p>
          </span>
        </div>

        <div
        className='
        flex
        items-center
        justify-center
        w-full
        h-screen
        bg-cyan-500
        '>

        </div>
    </>
  )
}

export default AppRoutes