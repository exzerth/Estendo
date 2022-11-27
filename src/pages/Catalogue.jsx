import React from 'react'
import Navbar from '../components/Navbar'
import GenBrand from "../components/GenBrand"
import CatalogueGrid from '../components/CatalogueGrid'
import Footer from "../components/Footer"

const Catalogue = () => {
  return (
    <>
    <Navbar/>
    <CatalogueGrid />
    <GenBrand/>
    <Footer/>
    </>
  )
}

export default Catalogue