import React, { useState, useContext }from 'react'
import { useNavigate } from "react-router-dom";
import UserContext from '../context/UserContext'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { toast } from "react-hot-toast";


function Login() {
    const [formData, setFormData] = useState({username:"", password:""});
    const [showPassword, setShowPassword] = useState(false);
    const {setUser}  = useContext(UserContext)
    const Navigate = useNavigate();
    
    function changeHandler (event) {
        setFormData((prev) => {
            return {...prev, 
            [event.target.name] : event.target.value
        }
        })
    } 
     function submitHandler (event) {
        event.preventDefault();
        // console.log(formData)
        // setIsLoggedin(true);
        setUser(formData)
        toast.success("Login Succesful")
        Navigate("/profile")
        

     }
    return (
        <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto  gap-x-12 justify-between flex-wrap gap-y-5 ">
            <h1 className='text-richblack-900   font-semibold text-[1.875rem] leading-[2.375rem]'>Login Page</h1>
        <form
        onSubmit={submitHandler}
        className="flex flex-col w-full gap-y-4 mt-6"
    >
        <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                UserName
                <sup className="text-pink-200">*</sup>
            </p>

            <input
                type="text"
                required
                value={formData.username}
                placeholder="Enter your email address"
                onChange={changeHandler}
                name="username"
                className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
        </label>

        <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                Password
                <sup className="text-pink-200">*</sup>
            </p>

            <input
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                placeholder="Enter Password"
                onChange={changeHandler}
                name="password"
                className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />

            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-[38px] cursor-pointer ">
                {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
            </span>

            <Link to="#">
                <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">Forgot Password</p>
            </Link>
        </label>

        <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900">Sign in</button>
    </form>
    </div>
        
    )
}

export default Login
