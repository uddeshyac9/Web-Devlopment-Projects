import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")


  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center' style={{backgroundColor: color}}>
      
        <h1 className='mb-10 uppercase text-3xl text-cyan-600'>Bg Changer </h1>
        <div className=' flex gap-2 flex-wrap  max-w-[1000px] py-2 items-center justify-evenly border-[2px] rounded-lg bg-slate-300 w-[90%] text-center'>
        
          <button onClick={() => setColor("red")} className="py-1  px-2  rounded-xl w-16 bg-red-600">Red</button>
          <button onClick={() => setColor("green")} className="py-1  px-2 rounded-xl w-16 bg-green-500">Green</button>
          <button onClick={() => setColor("blue")} className="py-1 px-2  rounded-xl w-16 bg-blue-600">Blue</button>
          <button onClick={() => setColor("violet")} className="py-1 px-2  rounded-xl w-16 bg-violet-600">Violet</button>
          <button onClick={() => setColor("grey")} className="py-1 px-2  rounded-xl w-16 bg-gray-500">Grey</button>
          <button onClick={() => setColor("yellow")} className="py-1 px-2  rounded-xl w-16 bg-yellow-500">Yellow</button>
          <button onClick={() => setColor("pink")} className="py-1 px-2  rounded-xl w-16 bg-pink-500">Pink</button>
          <button onClick={() => setColor("purple")} className="py-1 px-2  rounded-xl w-16 bg-purple-600">Purple</button>
          <button onClick={() => setColor("orange")} className="py-1 px-1  rounded-xl w-16 bg-orange-600">Orange</button>
          <button onClick={() => setColor("black")} className="py-1 px-2  rounded-xl w-16 bg-black text-white">Black</button>
          <button onClick={() => setColor("white")} className="py-1 px-2  rounded-xl w-16 bg-white">White</button>
        </div>
        
    </div>


  )
}

export default App
