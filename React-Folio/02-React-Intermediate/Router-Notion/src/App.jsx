import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Contact from "./components/Contact"



function App() {
  const [isLoggedin, setIsLoggedin] = useState(false)

  return (
<div>
  <Navbar isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login setIsLoggedin={setIsLoggedin}/>}/>
    <Route path='/signup' element={<SignUp setIsLoggedin={setIsLoggedin}/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>

 
  </Routes>
  
</div>
  )
}

export default App
