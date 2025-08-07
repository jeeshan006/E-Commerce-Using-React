import React from 'react'
import Products from '../Products/Products'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className='h-screen w-full'>
    <nav className="navbar flex justify-between">
      <h3 className="logo">MyApp</h3>
      <div className="nav-links">
        <Link to="/">Login</Link>
        <Link to="/products">Products</Link>
      </div>
    </nav>
      <h1>Login Page</h1>
      <Products />
    </div>
  )
}

export default LoginPage
