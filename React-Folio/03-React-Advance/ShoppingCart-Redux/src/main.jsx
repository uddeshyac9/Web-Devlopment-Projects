import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Redux/app/store.js'
import { HashRouter } from 'react-router-dom'
import { Toaster } from "react-hot-toast";


ReactDOM.createRoot(document.getElementById('root')).render(
  < HashRouter>
   <Provider store={store}>
    <App />
    <Toaster/>
  </Provider>,
  </HashRouter>
 
)
