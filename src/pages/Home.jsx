import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Guide from "../components/Guide"
import Offers from "../components/Offers"
import Videos from "../components/Videos"
import Testimony from "../components/Testimony"
import GenBrand from "../components/GenBrand"
import Footer from "../components/Footer"
import homeHero from "../images/hero.png"


const styles = {
  width: 100 + "%",
  overflow: "hidden",
  height: 545,
  backgroundImage: `url(${homeHero})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  position: "relative"
}

const Home = ({title, subtitle, selectGen, advGen}) => {

  title = <h1>Welcome to Estendo</h1>
  subtitle = <p>Your one-stop shop for all information about your favorite generator and water pump brands, your trusted dealer network in Sumec and other generator brands for over 20 years.</p>
  selectGen = <button className="my-btn btn btn-danger mr-2">Select a Generator</button>
  advGen = <button className="btn btn-outline-light">Generator Advice</button>

  return (
    <>
    <Navbar />
    <div style={styles}>
      <Hero title={title} subtitle={subtitle} selectGen={selectGen} advGen={advGen}/>
    </div>
    <Guide />
    <Offers />
    <Videos />
    <Testimony />
    <GenBrand />
    <Footer />
    </>
  )
}

export default Home