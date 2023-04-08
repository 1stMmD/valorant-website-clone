import React, { useEffect, useRef } from 'react'
import {
    Route,
    Routes
} from "react-router-dom"
import Navbar from './components/layouts/navbar/Navbar'
import Introduction from './components/sections/landing/introduction'
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

        <Introduction/>

        <div
        className='
        flex
        relative
        items-center
        justify-center
        w-full
        h-screen
        bg-primary
        after:content-[""]
        after:z-2
        after:absolute
        after:-top-[5vw]
        after:left-0
        after:border-b-[5vw]
        after:border-r-[5vw]
        after:border-r-transparent
        after:border-b-slate-100
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