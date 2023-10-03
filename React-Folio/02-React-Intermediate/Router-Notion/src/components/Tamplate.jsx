import React from 'react'
import SignUpForm from '../components/SignUpForm'
import SignInForm from '../components/SignInForm'
import frame from "../assets/frame.png"

function Tamplate({title, desc1, desc2, setIsLoggedin, image, formtype}) {
    return (
        <div className='flex'>
            <div>
                <h1>{title}</h1>
                <p><span>{desc1}</span>
                <span>{desc2}</span></p>
                {formtype === "signup" ? (<SignUpForm setIsLoggedin={setIsLoggedin}/>) : (<SignInForm setIsLoggedin={setIsLoggedin}/>)}
                <div>
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>
                <button><p>Sign In with Google</p></button>
            </div>
            <div className="relative w-11/12 max-w-[450px]">
        <img
          src={frame}
          alt="patter"
          width={558}
          height={504}
          loading="lazy"

        />
        <img
          src={image}
          alt="patter"
          width={558}
          height={504}
          loading="lazy"
          className="absolute -top-4 right-4 "
        />
      </div>
        </div>
        
    )
}

export default Tamplate
