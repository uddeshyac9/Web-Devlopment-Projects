import React from 'react'
import Tamplate from '../components/Tamplate'
import loginImg from "../assets/login.png"

function Login({setIsLoggedin}) {
    return (
        <div>
            <Tamplate title="Welcome Back"
            desc1="Build skills for today, tomorrow, and beyond."
            desc2="Education to future-proof your career."
            image={loginImg}
            formtype={"login"}
            setIsLoggedin={setIsLoggedin}
            />
        </div>
        
    )
}

export default Login
