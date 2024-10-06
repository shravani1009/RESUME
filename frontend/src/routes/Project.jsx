import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Heroimage from '../components/Heroimage'
import HEROimg from '../components/HEROimg'
import Card from '../components/Card'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HEROimg heading ="PROJECTS" text = "Some of my most recent works"/>    
      <Card/>
      <Footer/>
      
      
    </div>
  )
}

export default Project
