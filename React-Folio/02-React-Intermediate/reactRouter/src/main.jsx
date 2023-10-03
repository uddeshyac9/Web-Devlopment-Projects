import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx';
import AboutUs from './components/AboutUs.jsx';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import User from './components/User.jsx';
import Github, {githubInfoLoader} from './components/Github.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <AboutUs />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])
const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="about" element={<AboutUs/>}/>
    
       
       <Route path="contact" element={<Contact/>}/>
    
    <Route loader={githubInfoLoader} path="github" element={<Github/>}/>
    <Route 
     path="user/:userid" element={<User/>}/>
    <Route path="*" element={<div className=' text-5xl text-center my-40'>Page Not Found</div>}/>
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
