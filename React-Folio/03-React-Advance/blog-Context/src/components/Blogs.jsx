import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';


function Blogs() {
    const {loading , posts} = useContext(AppContext);



    return (
        <div className='max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px]'>
        {loading ? (
          <Spinner />
        ) : ( posts.length === 0 ? (<div> <p>No post found</p> </div>): 
        ( posts.map( (post) => ( <div key={post.id}> 
         <p className="font-bold text-sm ">{post.title}</p>
        <p className="text-[14px]">
            By <span className="italic">{post.author}</span> or{" "}
            <span className="underline font-bold">{post.category}</span>
        </p>
        <p className="text-[14px]">Posted on {post.date}</p>
        <p className="text-[16px] mt-[13px]">{post.content}</p> 
        <div>
        {post.tags.map((tag, index) => {
                                return <span key={index} className="text-xs ml-2 font-semibold underline text-blue-700 cursor-pointer">#{tag}</span>;
                            })}
        </div>
        
        </div>
        ))
        )
        
        )}
      </div>
      
        
    )
}

export default Blogs
