import React, { useEffect, useRef } from 'react'
import {
    Route,
    Routes
} from "react-router-dom"
import Navbar from './components/layouts/navbar/Navbar'
import Introduction from './components/sections/landing/introduction'
import Latest from './components/sections/landing/Latest'
import Featured from './components/sections/landing/featured'
import LearnGame from './components/sections/landing/learn-game'
import Agents from './components/sections/landing/agents'
import Maps from './components/sections/landing/maps'
import Footer from './components/layouts/footer'

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

        <LearnGame/>

        <Agents/>

        <Maps/>

        <Footer/>

    </>
  )
}

export default AppRoutes