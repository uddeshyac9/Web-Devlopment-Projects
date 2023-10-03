import { useState } from 'react'
import { NavLink, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./components/Home"
import Header from "./components/Header"
import AboutUS from "./components/AboutUs"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import MainHeader from './components/MainHeader';



function App() {


  return (
 <div>
  {/* <nav >
    <ul className='flex justify-evenly'>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/header">Header</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      <li><NavLink to="/footer">Footer</NavLink></li>

    </ul>
  </nav>
      <Routes>
        <Route path="/" element={<MainHeader/>} >
        <Route index element = {<Home/>} />
        <Route path="/header" element={<Header/>} />
        <Route path="/about" element={<AboutUS/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="*" element={<div>Not Found page</div>} />
        </Route>
     
      </Routes> */}

 </div>
  )
}

export default App
