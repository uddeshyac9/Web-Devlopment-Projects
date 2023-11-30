import { useState, useContext, useEffect } from 'react'
import Blogs from './components/Blogs'
import PageFooter from './components/PageFooter'
import Header from './components/Header'
import { AppContext } from './context/AppContext'






function App() {
  
const {fetchBlog, page} = useContext(AppContext);

useEffect(() => {
  fetchBlog(page);
}, []); 


  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-x-1">
      <Header/>
      <Blogs/>
      <PageFooter/>
    </div>
  )
}

export default App
