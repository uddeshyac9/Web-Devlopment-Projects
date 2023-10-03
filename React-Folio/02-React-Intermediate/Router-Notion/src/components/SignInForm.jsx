import React, { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";



function SignInForm({setIsLoggedin}) {
    const [formData, setFormData] = useState({email:"", password:""});
    const [showPassword, setShowPassword] = useState(false);
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
        setIsLoggedin(true);
        toast.success("Login Succesful")
        Navigate("/dashboard")
        

     }
    return (
        <form onSubmit={submitHandler}>
            <label >
                <p>Email Address<sup>*</sup></p>
                <input required type="email" name='email' placeholder='Enter Your Email' value={formData.email} onChange={changeHandler}/>
            </label>
            <label >
                <p>Password<sup>*</sup></p>
                <input required type={showPassword ? ("text") : ("password")} name='password' placeholder='Enter Your Password' value={formData.password} 
                onChange={changeHandler} />
                <span onClick={() => setShowPassword((prev) => !prev)}>{showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}</span>
                <Link to="#"><p>Forgot Password</p></Link>
            </label>
            <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900">Sign in</button>
        </form>
    )
}

export default SignInForm
