import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from '../components/Spinner';


const API_KEY = import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


function useGif(tag) {
  
    const [gif , setGif] = useState('')
    const [loading, setLoading]= useState(false);
   async function fetchData() {
    try {
      setLoading(true)
        const memeUrl = tag ? (`${url}&tag=${tag}`) : (url) ;
        const {data} = await axios.get(memeUrl);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource)

        setLoading(false)

    } catch {
        console.log("Error")
    }
  
        
    }
    useEffect(()=> {
        fetchData()
    },[])
    
    return {gif, loading, fetchData}
  
        
    
}

export default useGif