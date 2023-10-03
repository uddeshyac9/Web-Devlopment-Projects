import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [formData, setFormData] = useState({firstName: "", lastName: "", gender:"Male", email:"", country:"India",streetAddress:"",
 cityName:"", state:"", postalCode:"", newProducts: false, newsUpdates:false, offers: false, pushNotification:""})
  
   function changeHandler(event) {
    const {name, value, checked, type} = event.target;
    setFormData((prev) => {
      return { ...prev, 
        [name] : type === "checkbox" ? checked : value
      }
    })
   }
   function submitHandler(event) {
    event.preventDefault();
    console.log(formData)
    
   }

  return (
   
        <div className='flex  justify-center  w-screen h-[100%]  m-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
          <form onSubmit={submitHandler} className=' text-center flex flex-col gap-2 w-[300px]'>

            <label htmlFor="firstName" className='mt-2' >First Name</label>
            <input type="text" name='firstName' id='firstName' value={formData.firstName} placeholder='First Name' onChange={changeHandler} className='outline '/>

            <label htmlFor="lastName" >Last Name</label>
            <input type="text" name='lastName' id='lastName' value={formData.lastName} placeholder='Last Name' onChange={changeHandler} className='outline '/>
                
             <label htmlFor="gender">Gender</label>   
             <select name='gender' id='gender' value={formData.gender} onChange={changeHandler} className=''>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            </select>

            <label htmlFor="email" >Email</label>
            <input type="text" name='email' id='email' value={formData.email} placeholder='Email' onChange={changeHandler} className='outline w-[300px]'/>
            
            <label htmlFor="country">Select Your Country</label>
            <select name="country" id="country" value={formData.country} onChange={changeHandler}>
              <option value="Australia">Australia</option>
              <option value="USA">USA</option>
              <option value="UAE">UAE</option>
              <option value="NewZealand">New Zealand</option>
              <option value="India">India</option>
              <option value="Other">Other</option>
            </select>

            <label htmlFor="streetAddress" className='mt-2' >Street Address</label>
            <input type="text" name='streetAddress' id='streetAddress' value={formData.streetAddress} placeholder='streetAddress' onChange={changeHandler} className='outline w-[300px] py-1 px-1'/>

            <label htmlFor="cityName" >CityName</label>
            <input type="text" name='cityName' id='cityName' value={formData.cityName} placeholder='City Name' onChange={changeHandler} className='outline w-[300px]'/>

           <label htmlFor="state">State Name</label>
            <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={changeHandler}
          className="outline"
          id="state"
        />

        
        <label htmlFor="postalCode">PostalCode</label>
        
        <input
          type="number"
          name="postalCode"
          placeholder="postalCode"
          value={formData.postalCode}
          onChange={changeHandler}
          className="outline"
          id="postalCode"
        />

<fieldset className=''>
          <legend>Notification About</legend>
          <div className="flex">
            <input
              type="checkbox"
              id="newProducts"
              name="newProducts"
              checked={formData.newProducts}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="newProducts">New Products</label>
              
            </div>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              id="news&Updates"
              name="newsUpdates"
              checked={formData.newsUpdates}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="news&Updates">News&Updates</label>
              
            </div>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              id="offers"
              name="offers"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">Offers</label>
              
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Push Notification</legend>
         

          <input type="radio" id="pushEverything" name="pushNotification" value="Everything" onChange={changeHandler} />
          <label htmlFor="pushEverything">Everything</label>

          <input type="radio" id="pushEmail" name="pushNotification" value="Same as email" onChange={changeHandler} />
          <label htmlFor="pushEmail">Same as Email</label>

          <input type="radio" id="pushNothing" name="pushNotification" value="No Push Notification" onChange={changeHandler} />
          <label htmlFor="pushNothing">No Push Notification</label>
        </fieldset>

        <button  className='border mb-10  mt-5 rounded-lg bg-red-500 hover:bg-black hover:text-white py-1 transition-all' >Submit</button>


          </form>




        </div>
   
  )
}

export default App
