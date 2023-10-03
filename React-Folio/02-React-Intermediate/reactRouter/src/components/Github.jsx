import React, { useEffect, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

function Github() {
    const navigate = useNavigate();
    const data = useLoaderData();
    function clickHandler() {
        navigate("/contact")
        
    }
    function backHandler() {
        navigate(-1)
        
    }
    // const [data, setData] = useState ([]);
    // useEffect(() => {
    //   fetch('https://api.github.com/users/hiteshchoudhary').then((responce) => 
    //     responce.json()).then((data) => setData(data))
    // },[])

    return (
        <div className='flex flex-col items-center'>
        <div className=' text-5xl text-center mt-20 mb-5'>Github Followers: {data.followers}</div>
        <img src={data.avatar_url} alt="Hitesh" width={300}/>
        <div className='flex gap-8'>
        <button onClick={clickHandler} className='mt-4 w-24 text-white bg-orange-700 hover:bg-orange-800 py-1 px-1 rounded-xl '>Contact Us</button>
        <button onClick={backHandler} className='mt-4 w-24 text-white bg-orange-700 hover:bg-orange-800 py-1 px-1 rounded-xl '>Go Back</button>

        </div>
        
        </div>
    )
}

export default Github
export const githubInfoLoader = async () => {
    const responce = await fetch('https://api.github.com/users/hiteshchoudhary')
    return responce.json()
}
