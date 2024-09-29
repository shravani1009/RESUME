import "./Heroimagestyles.css";

import React from 'react'
import girlcoding from '../assets/girlcoding.jpg'
import Girll from '../assets/Girll.jpg'
import girl from '../assets/girl.jpg'
import code from '../assets/code.jpg'
import { Link } from "react-router-dom";

const Heroimage = () => {
  return (
    <div className="hero">
        <div className="mask">
          <img className="intro-img"
          src = {code} alt="girl"/>  
        </div>
        <div className="content">
          <p>Hi There! My name is Shravani Shinde and I am a</p>
          <h1>Web developer , Programmer & Graphic Designer</h1>
          
          
         
          <Link to = "/project" className="btn">Projects</Link>
          <Link to = "/contact" className="btn btn-light ">CONTACT</Link>
          </div>    
    </div>
  )
}

export default Heroimage;
