import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import HEROimg from '../components/HEROimg'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
       <Navbar/>
       <HEROimg heading = "ABOUT" />
       <AboutContent/>       
       <Footer/>

    </div>
  )
}

export default About
