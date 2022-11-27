import React from 'react'
import '../css/privacy.css'
import Footer from '../components/Footer'
import GenBrand from '../components/GenBrand'
import Navbar from '../components/Navbar'
import PrivacyContent from '../components/PrivacyContent'

const Privacy = () => {
  return (
    <>
    <Navbar/>
    <PrivacyContent/>
    <GenBrand/>
    <Footer/>
    </>
  )
}

export default Privacy