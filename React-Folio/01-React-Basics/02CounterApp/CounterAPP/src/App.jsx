import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  let [counter, setCounter] = useState(0)
  //let counter = 5;
  function incVal() {
    // counter +=1;
    // console.log(counter);
    
      setCounter(counter +=1)
    
    

  }
  function decVal() {
    
      setCounter(counter -=1)
    
    
  }
  function reset() {
 setCounter(0)
    
  }

  return (
    <div>
 <h1>Counter App</h1>
 <h2>Counter Value : {counter}</h2>
 <div className="btn">
 <button onClick={incVal}>Increase Value {counter}</button>
 <button onClick={decVal}>Decrease Value {counter}</button> 
 </div>
 <br />
 <button onClick={reset}>Reset</button>
 

 
    </div>


  )
}

export default App
