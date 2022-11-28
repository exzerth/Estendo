import React from 'react'
import "../css/about.css"
import AboutContent from '../components/AboutContent'
import Footer from '../components/Footer'
import GenBrand from '../components/GenBrand'
import Navbar from '../components/Navbar'
import Testimony from '../components/Testimony'
import Hero from '../components/Hero'

const About = ({title}) => {

  title = <h1 className="text-center">About Us</h1>
  return (
    <>
    <Navbar/>
    <Hero title={title} />
    <AboutContent/>
    <Testimony/>
    <GenBrand/>
    <Footer/>
    </>
  )
}

export default About