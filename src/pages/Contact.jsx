import React from 'react'
import "../css/contact.css"
import ContactContent from '../components/ContactContent'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const Contact = ({title}) => {
    title=<h1 className='text-center'>Contact Us</h1>
  return (
    <>
    <Navbar/>
    <Hero title={title}/>
    <ContactContent/>
    <Footer/>
    </>
  )
}

export default Contact