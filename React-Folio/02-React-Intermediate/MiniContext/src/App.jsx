import React, { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from "./context/UserContextProvider"
import { Route, Routes } from 'react-router-dom'


function App() {
 

  return (
    <UserContextProvider>
        <div className=' max-w-md m-auto flex items-center justify-center bg-richblack-100'>


   <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/profile' element={<Profile/>}></Route>


   </Routes>
     </div>

    </UserContextProvider>

  
   
  )
}

export default App
