import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
    return (
        <div className='text-3xl my-40 text-center'>User: {userid}</div>
        
    )
}

export default User
