import React,{ useState } from 'react'
import Tours from './Tours';

function Cards({id, image, info , price, name, tourRemover}) {
    
    const [readmore,setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0, 200)}...`;
    function readmoreHandler(){
        setReadmore(!readmore);
    }
   
  
    return (
        <div className='flex flex-wrap flex-col rounded-xl items-center shadow-lg w-[400px] h-max m-[1rem] p-[1rem] '>
            <img className='w-[300px] aspect-square object-cover' src={image}  ></img>
            <div className=' my-[20px] mx-[5px]'>
                <h4 className='text-[#1faa59] text-[1.3rem]'>{price}</h4>
                <h4 className='text-[1.5rem]'>{name}</h4>
            </div>
            <div >
                {description}
                <span className='text-[#12b8c8] uppercase cursor-pointer' onClick={readmoreHandler}>{readmore ? `Show less` : `Read more`}</span>
            </div>
            <button className='text-center text-black mt-[18px] py-[][10px] px-[80px] border-[1px] border-[#b4161b] cursor-pointer text-[18px] font-bold bg-[#b4161b21] transition-all duration-500 hover:bg-red-600 hover:text-white' onClick={() => tourRemover(id)}>Not Interested</button>

            
        </div>
        
    );
};

export default Cards
