import React from 'react'
import "../css/contact.css"
import ContactContent from '../components/ContactContent'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import aboutHero from "../images/about-hero.png"

const aboutStyles = {
  width: 100 + "%",
  overflow: "hidden",
  height: 100 + "%",
  backgroundImage: `url(${aboutHero})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  position: "relative"
}

const Contact = ({title}) => {
    title=<h1 className='text-center'>Contact Us</h1>
  return (
    <>
    <Navbar/>
    <div style={aboutStyles}>
      <Hero title={title}/>
    </div>
    <ContactContent/>
    <Footer/>
    </>
  )
}

export default Contact