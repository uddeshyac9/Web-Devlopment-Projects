import React, { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';


function SignUpForm({setIsLoggedin}) {
    const [formData, setFormData] = useState({firstname:"", lastname:"", email:"", password:"", confirmpassword:""})
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);
    const Navigate = useNavigate();

    function changeHandler (event) {
      setFormData((prev) => {
        return {...prev, 
            [event.target.name]: event.target.value 

        }
      })

    }
    function submitHandler(e) {
        e.preventDefault();
        if (formData.password != formData.confirmpassword) {
          toast.error("Passwords do not match");
          return;
        }
    
        setIsLoggedin(true);
        toast.success("Account Create");
        const accountData = {
          ...formData,
        };
        console.log(accountData);
    
        Navigate("/dashboard");
      }
    return (
        <div>
            <div>
                <button>
                    Student
                </button>
                <button>
                    Instructor 
                </button>
            </div>
        <form onSubmit={submitHandler}>
            <div>
                <label> 
                    <p>First Name <sup>*</sup></p>
                    <input type="text" name= "firstname" value={formData.firstname} onChange={changeHandler} placeholder='First Name'/>
                </label>
                <label> 
                    <p>Last Name <sup>*</sup></p>
                    <input type="text" name= "lastname" value={formData.lastname} onChange={changeHandler} placeholder='Last Name'/>
                </label>
            </div>
             <label >
                <p>Email Address<sup>*</sup></p>
                <input type="email" name='email' value={formData.email} onChange={changeHandler} placeholder='Email Id' />
             </label>
            <div>
                <label> 
                    <p>Password <sup>*</sup></p>
                    <input type={showPassword ? ("text"): ("password")} name= "password" value={formData.password} onChange={changeHandler} 
                    placeholder='Password'/>
                    <span onClick={() => setShowPassword((prev)=>!prev)}>{showPassword ? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>)}</span>
                </label>
                <label> 
                    <p>Confirm Password<sup>*</sup></p>
                    <input type={confirmPassword ? ("text") : ("password")} name= "confirmpassword" value={formData.confirmpassword} onChange={changeHandler} 
                    placeholder='Confirm Password'/>
                    <span onClick={() => setConfirmPassword((prev) => !prev)}>{confirmPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}</span>
                </label>
                <button>Create Account</button>
            </div>
            </form>
        </div>
        
    )
}

export default SignUpForm
