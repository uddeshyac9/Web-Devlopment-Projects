import React from 'react'
import Tamplate from '../components/Tamplate'
import signupImg from "../assets/signup.png"

function SignUp({setIsLoggedin}) {
    return (
        <div>
            <Tamplate 
              title="Join the millions learning to code with StudyNotion for free"
              desc1="Build skills for today, tomorrow, and beyond."
              desc2="Education to future-proof your career."
              image={signupImg}
              formtype="signup"
              setIsLoggedin={setIsLoggedin} />
        </div>
        
    )
}

export default SignUp
