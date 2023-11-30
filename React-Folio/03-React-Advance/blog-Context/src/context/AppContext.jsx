import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";


export const AppContext = createContext();

function AppContextProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null);
    const value = {loading,setLoading,posts,setPosts,page, setPage,
                    totalPages, setTotalPages, fetchBlog, handlePageChange};
                   
                  

              async function fetchBlog(page) {
                setLoading(true)
                let url = `${baseUrl}?page=${page}`;
               try {
                const responce = await fetch(url);
                const data = await responce.json();
                setPage(data?.page);
                setPosts(data?.posts)
                setTotalPages(data?.totalPages)
                console.log(data)
                
                

               }catch(error) {
                console.log("Error while fetching the data")
                setPage(1);
                setPosts([])
                setTotalPages(null)

               }
               setLoading(false)
              }      

              function handlePageChange(page) {
                setPage(page)
                fetchBlog(page)
                
                
              }
              

           return  (<AppContext.Provider value={value}> {children} </AppContext.Provider>
           )

}
 export default AppContextProvider
 
 
