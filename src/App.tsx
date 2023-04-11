import { useState } from 'react'
import { 
  BrowserRouter as Router,
  Routes,
  Route,
 } from 'react-router-dom'
import { Navigate } from 'react-router'
import AppRoutes from './AppRoutes'

function App() {
  return (
    <main
    ref={(node : HTMLElement | null) => {node?.focus()} }
    tabIndex={0}
    id="app"
    className='
    overflow-x-hidden
    h-screen
    '>
      <Router>
        <Routes>
          <Route path='/en-us/*' element={<AppRoutes/>}/>
          <Route path="*" element={<Navigate to={"/en-us"} />}/>
        </Routes>
      </Router>
    </main>
  )
}

export default App
