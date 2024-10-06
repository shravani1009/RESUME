import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import HEROimg from '../components/HEROimg'
import AboutContent from '../components/AboutContent'
const Contact = () => {
  return (
    <div>
       <Navbar/>
       <HEROimg heading = "CONTACT" text = "Lets have a chat"/>
       <AboutContent/>
       <Footer/>
      
    </div>
  )
}

export default Contact
