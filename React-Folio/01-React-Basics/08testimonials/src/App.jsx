import { useState } from 'react'
import reviews from "./data";
import Testimonials from './components/Testimonials';


function App() {
  // const [count, setCount] = useState(0)


  return (
   
      <div className=' flex flex-col w-screen h-screen justify-center
      items-center bg-gray-200 '>
        <div className='text-center'>
          <h1 className='text-4xl text-bold mt-4'>Our Testimonals</h1>
          <div className='bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto'></div>
          <Testimonials reviews= {reviews}/>
          </div>

      
      </div>
  
 
  )
}

export default App
