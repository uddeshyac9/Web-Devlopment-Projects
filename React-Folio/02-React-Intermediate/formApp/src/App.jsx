import { useState } from 'react'


function App() {
  //  const [firstName, setfirstName] = useState("")
  //  const [lastName, setLastName] = useState("")
  //  console.log(firstName)
  //  console.log(lastName)
   
  //  function firstNameHandler(e) {
  //   // console.log(e.target.value);
  //   setfirstName(e.target.value)
  //  }
  //  function lastNameHandler(e) {
  //   // console.log(e.target.value);
  //   setLastName(e.target.value)
  //  }
  const [formData, setFormData] = useState({firstName:"", lastName:"", email:"", Comments:"",
   isVisable: false, mode:"", favCar:"Thar"});
  // console.log(formData)
  function changeHandler(event) {
   const {type, name, checked, value} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
      //  [event.target.name]: event.target.value
        [name] : type === "checkbox" ? checked : value
        
      }
    })
    
  }
   function submitHandler(event) {
    event.preventDefault();
    // Printing FORM Data
    console.log("Form Data : ")
    console.log(formData);
    
   }

  return (
   <div  className='h-screen w-screen  bg-slate-300 '>
    <form onSubmit={submitHandler} className='flex gap-5  items-center flex-col'>
    <input type="text" placeholder='First Name' onChange={changeHandler} name='firstName' value={formData.firstName} className='w-[300px] py-2 border'/>
    <input type="text" placeholder='Last Name' onChange={changeHandler} name='lastName' value={formData.lastName} className='w-[300px] py-2 border' />
    <input type="email" placeholder='Email' onChange={changeHandler} name='email' value={formData.email}  className='w-[300px] py-2 border' />
    <textarea name="Comments" value={formData.Comments} cols="40" rows="5" placeholder='Comments' onChange={changeHandler}></textarea>
    <div> 
    <input type="checkbox" name='isVisable' onChange={changeHandler} checked={formData.isVisable} id='isVisable' />
    <label htmlFor="isVisable"> Checkbox</label>
    </div>
    <fieldset className='flex gap-2 '>
      <legend className='text-center '>Mode :</legend>
      <input type="radio" name='mode' value="Online-mode" id='Online-mode' checked={formData.mode === "Online-mode"} onChange={changeHandler} />
      <label htmlFor="Online-mode">Online mode</label>
      <input type="radio" name='mode' value="Offline-mode" id='Offline-mode'  checked={formData.mode === "Offline-mode"} onChange={changeHandler}/>
      <label htmlFor="Offline-mode">Offline mode</label>
    </fieldset>
    <div>
      <label htmlFor="favCar">Select your Fav Car : </label>
      <select name="favCar" id="favCar" value={formData.favCar} onChange={changeHandler}>
        <option value="Scorpio">Scorpio</option>
        <option value="Thar">Thar</option>
        <option value="Fortuner">Fortuner</option>
        <option value="Range Rover">Range Rover</option>
        <option value="None of These">None of These</option>
      </select>
    </div>
    <button className='border py-1 px-2 rounded-md border-black bg-red-300'>Submit</button>
    </form>

   </div>
  )
}

export default App
