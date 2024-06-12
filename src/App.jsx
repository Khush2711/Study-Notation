import './App.css'
import { Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/Signup'
import Dashboard from './Pages/Dashboard'
import { useState } from 'react'

function App() {

  const [isLoggedin, setIsLoggedin] = useState(true);

  return (
    <div>

      <Navbar isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>

      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='login' element={<Login/>} />
        <Route path='signup' element={<SignUp/>} />
        <Route path='dashboard' element={<Dashboard/>} />

      </Routes>
      

    </div>
  )
}

export default App