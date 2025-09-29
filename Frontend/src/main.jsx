import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Route, RouterProvider,createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import  Home from './Components/Home/Home'
import Layout from './Layout.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Products from './Components/Products/Products.jsx'
import Login from './Components/Login/Login.jsx'
import LoginPage from './Components/Login/LoginPage.jsx'
import Signup from './Components/SignUp/Signup.jsx'

const router = createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />}/>
    <Route path='products' element={<Products />}/>
    <Route path='about' element={<About />}/>
    <Route path='contact' element={<Contact />}/>
    <Route path='login' element={<Login />}/>
    <Route path='loginpage' element={<LoginPage />}/>
    <Route path='signup' element={<Signup />}/>
    
  </Route>
)
)   

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
