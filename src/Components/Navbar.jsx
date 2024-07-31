import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="/Post">Post</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
