import "./NavbarStyles.css"
import { Link } from "react-router-dom"
import React from 'react'
import { FaBars } from "react-icons/fa"


const Navbar = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>PORTFOLIO</h1>
      </Link>
      <ul className="nav-menu">
        <li>
            <Link to= "/">Home</Link>
        </li>
        <li>
            <Link to= "/project">Project</Link>
        </li>
        <li>
            <Link to= "/about">About</Link>
        </li>
        <li>
            <Link to= "/contact">Contact</Link>
        </li>
      </ul>
      <div className="humburger">
        <FaBars size={20} style={{color: "#fff"}} />
      </div>
    </div>
  )
}

export default Navbar
