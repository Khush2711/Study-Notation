import './App.css'
import { Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/Signup'
import Dashboard from './Pages/Dashboard'
import { useState } from 'react'
import Template from './Components/Template'

function App() {

  const [isLoggedin, setIsLoggedin] = useState(false);


  const login = {
    title: 'Welcome Back',
    heading1: 'Build skills for today, tomorrow, and beyond.',
    heading2: 'Education to future-proof your career.',
    formType: 'login'
  }

  const signup = {
    title: 'Join the millions learning to code with StudyNotion for free',
    heading1: 'Build skills for today, tomorrow, and beyond.',
    heading2: 'Education to future-proof your career.',
    formType: 'signup'
  }

  return (
    <div className='bg-richblack-900 text-white'>

      <Navbar isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='login' element={<Template title={login.title} heading1={login.heading1}
          heading2={login.heading2} formType={login.formType} />} />

        <Route path='signup' element={<Template title={signup.title} heading1={signup.heading1}
          heading2={signup.heading2} formType={signup.formType} />} />
        <Route path='dashboard' element={<Dashboard />} />

      </Routes>

      {/* <Template/> */}

    </div>
  )
}

export default App