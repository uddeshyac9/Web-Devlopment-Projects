import React, { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';


function SignUpForm({setIsLoggedin}) {
    const [formData, setFormData] = useState({firstName:"", lastName:"", email:"", password:"", confirmpassword:""})
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");
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
        toast.success("Account Created");
        const accountData = {
          ...formData,
        };
        console.log(accountData);
    
        Navigate("/dashboard");
      }
    return (
        <div>
      <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max">
        <button
          onClick={() => setAccountType("student")}
          className={`${
            accountType === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 "
          } py-2 px-5 rounded-full transition-all`}
        >
          Student
        </button>
        <button
          onClick={() => setAccountType("instructor")}
          className={`${
            accountType === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 "
          } py-2 px-5 rounded-full transition-all`}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        <div className="flex gap-x-4">
          <label htmlFor="" className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="Enter First Name"
              onChange={changeHandler}
              value={FormData.firstName}
              name="firstName"
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
          </label>

          <label htmlFor="" className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="Enter Last Name"
              onChange={changeHandler}
              value={FormData.lastName}
              name="lastName"
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
          </label>
        </div>

        <label htmlFor="" className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address
            <sup className="text-pink-200">*</sup>
          </p>

          <input
            type="email"
            required
            placeholder="Enter your email address"
            value={formData.email}
            onChange={changeHandler}
            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            name="email"
          />
        </label>

        <div className="flex gap-x-4 flex-col">
          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">
              Create Password
              <sup className="text-pink-200">*</sup>
            </p>

            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="Enter Password"
              onChange={changeHandler}
              value={formData.password}
              name="password"
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className=" right-3 top-[38px] absolute cursor-pointer z-10"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label htmlFor="" className=" w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password
              <sup className="text-pink-200">*</sup>
            </p>

            <input
              type={confirmPassword ? "text" : "password"}
              required
              placeholder="Confirm Password"
              onChange={changeHandler}
              value={formData.confirmpassword}
              name="confirmpassword"
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />

            <span
              onClick={() => setConfirmPassword(!confirmPassword)}
              className="absolute right-3 top-[38px] cursor-pointer z-10"
            >
              {confirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full">
          Create Account
        </button>
      </form>
    </div>
        
    )
}

export default SignUpForm;
