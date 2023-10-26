import React, {  useState } from 'react'
import UserContext from './UserContext';


function UserContextProvider({children}) {
    const [user, setUser] = useState("")
    const [isLoggedin, setIsLoggedin] = useState(false);
    return (
        <UserContext.Provider value={{user, setUser, isLoggedin, setIsLoggedin}}>
            {children} 
        </UserContext.Provider>
        
    )
}

export default UserContextProvider
