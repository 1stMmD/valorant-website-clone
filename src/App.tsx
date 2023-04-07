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
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={"/en-us"} />}/>
        <Route path='/:language/*' element={<AppRoutes/>}/>
      </Routes>
    </Router>
  )
}

export default App
