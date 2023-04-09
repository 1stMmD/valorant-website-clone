import React, { useEffect, useRef } from 'react'
import {
    Route,
    Routes
} from "react-router-dom"
import Navbar from './components/layouts/navbar/Navbar'
import Introduction from './components/sections/landing/introduction'
import Latest from './components/sections/landing/Latest'
import Featured from './components/sections/landing/featured'

function AppRoutes() {
  return (
    <>
        <Navbar/>
        
        {/* <Routes>
            <Route path="/" element={<span>Hello</span>}/>
            <Route path="/agents" element={<span>Bye</span>}/>
        </Routes> */}

        <Introduction/>

        <Latest/>

        <Featured/>

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