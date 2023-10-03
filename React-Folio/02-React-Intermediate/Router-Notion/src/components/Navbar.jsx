import React from 'react'
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg"
import toast from 'react-hot-toast';

function Navbar(props) {
   let   isLoggedin = props.isLoggedin;
   let  setIsLoggedin = props.setIsLoggedin;
    return (
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
        <Link to="/">
          <img src={logo} height={32} width={160} loading="lazy" />
        </Link>
        <nav className=''>
            <ul className='flex gap-3'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        {/* login-signup-logout-dashboard */}
        <div>
           { !isLoggedin &&

            <Link to="/login"> <button>Login</button> </Link>
        }            {
            !isLoggedin &&
            <Link to="/signup"> <button>SignUp</button> </Link>
        }            {
            isLoggedin &&
            <Link to="/"> <button onClick={() =>  {
                setIsLoggedin(false);
                toast.success("Logout Successfully ")
            }}
            >Logout</button> </Link>
        }            {
            isLoggedin &&
            <Link to="/dashboard"> <button>Dashboard</button> </Link>
        }
        </div>
        
        </div>
        
    )
}

export default Navbar
