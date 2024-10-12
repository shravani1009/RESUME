import React from 'react'
import Navbar from '../components/Navbar';
import Heroimage from '../components/Heroimage'
import Footer from '../components/Footer'
import Experience from '../components/experience'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Heroimage />
      <Experience/>
      <Footer />
    </div>
  )
}

export default Home


