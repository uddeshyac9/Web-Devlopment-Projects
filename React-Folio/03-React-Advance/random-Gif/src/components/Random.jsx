import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY = import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;


function Random() {
  const {gif, loading, fetchData} = useGif()
  //   const [gif , setGif] = useState('')
  //   const [loading, setLoading]= useState(false);
  //  async function fetchData() {
  //   try {
  //     setLoading(true)
  //       const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //       const {data} = await axios.get(url);
  //       const imageSource = data.data.images.downsized_large.url;
  //       setGif(imageSource)

  //       setLoading(false)

  //   } catch {
  //       console.log("Error")
  //   }
  
        
  //   }
  //   useEffect(()=> {
  //       fetchData()
  //   },[])
    
    return (
        <div className="w-1/2 h-[450px] bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
        <h1 className="text-3xl uppercase underline font-bold">A Random Gif</h1>
        {loading ? (<Spinner/>) : (<img src={gif}  className=' h-[300px] w-[75%]' />)}
        
      
        <button
          onClick={() => fetchData()}
          className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold"
        >
          Generate
        </button>
      </div>
        
    )
}

export default Random
