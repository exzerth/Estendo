import React from 'react'
import "../css/about.css"
import AboutContent from '../components/AboutContent'
import Footer from '../components/Footer'
import GenBrand from '../components/GenBrand'
import Navbar from '../components/Navbar'
import Testimony from '../components/Testimony'
import Hero from '../components/Hero'
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

const About = ({title}) => {

  title = <h1 className="text-center">About Us</h1>
  return (
    <>
    <Navbar/>
    <div style={aboutStyles}>
    <Hero title={title} />
    </div>
    <AboutContent/>
    <Testimony/>
    <GenBrand/>
    <Footer/>
    </>
  )
}

export default About