import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function App() {
  // const [count, setCount] = useState(0)
  let obj = {
    username: "Uddeshya",
    password: "React105@"
  }
  let array = [1,2,3]

  return (
    <div className=''>
      <h1 className='mb-5 text-blue-400'>Tailwind Card</h1>
      <div className='md:flex gap-5'>
      <Card username="Uddeshya" btnText='Click Here' myObj={obj}/>
     <Card username="Hitesh" btnText='ChaiOReact' myArr={array}/>

      </div>
  
  
    </div>


  )
}

export default App
