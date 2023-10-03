import { useState, useCallback, useEffect , useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
 const [charAllowed, setCharAllowed] = useState(false)
 const [password, setPassword] = useState("")
 //useRef hook
 const passwordRef = useRef(null)

 const passwordGenrator = useCallback(() => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if (numAllowed) str += "0123456789"
  if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)

  }
  setPassword(pass)
 },[length, numAllowed,charAllowed, setPassword])

 useEffect(() => {
  passwordGenrator()
 },[length, numAllowed, charAllowed, passwordGenrator])

 const copyToClipboard = useCallback(() => {
  
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, 50);
  window.navigator.clipboard.writeText(password)

 },[password])



  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} ref={passwordRef}  placeholder='Password' readOnly
         className='outline-none w-full py-1 px-3' />
         <button onClick={copyToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-red-500'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={50} value={length} id="lengthInput"className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}} />
          <label htmlFor='lengthInput'>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numAllowed}
          id='numberInput' onChange={() => { setNumAllowed((prev) => !prev)}} />
          <label htmlFor="numberInput">Numbers</label>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed}
             className='cursor-pointer' id="characterInput" onChange={(e) => {setCharAllowed((prev)=> !prev)}}/>
             <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
      <div className='flex w-full justify-center'>
      <button onClick={passwordGenrator} className='outline-none bg-blue-700 text-white px-3 py-1 mt-2 shrink-0 rounded-lg hover:bg-red-500'>Generate Password</button>

      </div>
   

 
    </div>


  )
}

export default App
