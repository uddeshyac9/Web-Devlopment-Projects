import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg"
import toast from 'react-hot-toast';
import { AiOutlineMenu } from "react-icons/ai";

function Navbar(props) {
   let   isLoggedin = props.isLoggedin;
   let  setIsLoggedin = props.setIsLoggedin;
   const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto flex-wrap">
        <Link to="/">
          <img src={logo} height={32} width={160} loading="lazy" />
        </Link>
        <button
        className="md:hidden block text-richblack-100"
        onClick={() => setShowMenu(!showMenu)}
      >
        <AiOutlineMenu/>
      </button>
      
      <nav className="md:flex">
        { showMenu ? (
          
          <ul className="flex flex-col  z-10  gap-y-2 text-richblack-100">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        ) :   
        <nav className='hidden md:flex'>
        <ul className='flex gap-x-6 text-richblack-100'>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </ul>
    </nav>}
      </nav>
        <div className='flex items-center gap-x-4 text-richblack-100'>
           { !isLoggedin &&

            <NavLink to="/login"> <button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Login</button> </NavLink>
        }            {
            !isLoggedin &&
            <NavLink to="/signup"> <button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>SignUp</button> </NavLink>
        }            {
            isLoggedin &&
            <Link to="/"> <button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700' onClick={() =>  {
                setIsLoggedin(false);
                toast.success("Logout Successfully ")
            }}
            >Logout</button> </Link>
        }            {
            isLoggedin &&
            <NavLink to="/dashboard"> <button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Dashboard</button> </NavLink>
        }
        </div>
        
        </div>
        
    )
}

export default Navbar
