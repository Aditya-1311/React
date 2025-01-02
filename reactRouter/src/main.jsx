import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact us/Contact.jsx'
import Github from './components/Github/Github.jsx'

const router=createBrowserRouter([
  {
   path:'/',
   element:<Layout/>,
   children:[
    {
      path:"",
      element:<Home/>
    },
    {
      path:'/About',
      element:<About/>
  
    },
    {
      path:'/Contact',
      element:<Contact/>
  
    }
    ,
    {
      path:'/github',
      element:<Github/>
  
    }
   ] 
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider router={router}/>
  </StrictMode>,
)