import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { useSelector } from 'react-redux';

function Navbar() {
    const cart = useSelector((state) => state.cart || []);
    return (
        <div>
          <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">

             <div>
             <NavLink to="/"><img src={logo} alt="Website Logo" className="h-14" /></NavLink>
             </div>
            
             <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
                <NavLink to="/"> <p className='text-slate-100'>Home</p> </NavLink>
                <NavLink to="/cart">  
                 <div className="relative">
                  <FaShoppingCart className="text-2xl"/>
                  {
                    cart.length > 0 &&
                    <span
                    className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{cart.length}</span>
                  }
                  
              </div></NavLink>
             </div>
             </nav>
            </div>

       
    )
}

export default Navbar
