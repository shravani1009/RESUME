import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import HEROimg from '../components/HEROimg'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
       <Navbar/>
       <HEROimg heading = "CONTACT" text = "Lets have a chat"/>
       <Form/>
       <Footer/>
      
    </div>
  )
}

export default Contact
