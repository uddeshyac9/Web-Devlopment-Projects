import React from 'react';
import Cards from './Cards';



function Tours({ tours, tourRemover }) {
  return (
    <div className='flex justify-center flex-row flex-wrap'>
      <div>
        <h2 className='text-red-500 border-[7px] border-[#0111a0] border-dashed text-[3rem] m-[6vh] py-[1vh] px-[5vw]'>Plan with Love</h2>
      </div>
      <div className='flex justify-center flex-row flex-wrap max-w-[1300px] m-auto'>
      {tours.map((tour) => (
  <Cards  key={tour.id} {...tour} tourRemover={tourRemover} />
))}

      </div>
    </div>
  );
}


export default Tours
