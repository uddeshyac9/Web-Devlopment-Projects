import React, { useState } from 'react';
import Tours from "./components/Tours"

import data from './data'



function App() {
  const [tours, setTours] = useState(data);
  function tourRemover(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length ===0) {
    return (
      <div className='h-[100vh] flex justify-center items-center flex-col'>
        <h2>No Tours Left</h2>
        <button  className='mt-[18px] uppercase py-[10px] px-[80px] border-[1px] border-[#b4161b]  hover:bg-red-600  hover:text-[#fff] transition-all ' onClick={() => setTours(data)}>Refresh</button>
      </div>
    )
  }




  return (
    <div>
    <Tours tours={tours} tourRemover={tourRemover} ></Tours>
    

    </div>


  )
}

export default App
